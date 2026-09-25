'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sparkles, Move3d } from 'lucide-react';

interface Masterplan3DViewerProps {
  onSelectBuilding?: (name: string) => void;
}

export default function Masterplan3DViewer({ onSelectBuilding }: Masterplan3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedObjName, setSelectedObjName] = useState<string>('Starbucks Drive-Thru');

  // Keep callback ref updated without triggering useEffect re-runs
  const onSelectBuildingRef = useRef(onSelectBuilding);
  useEffect(() => {
    onSelectBuildingRef.current = onSelectBuilding;
  }, [onSelectBuilding]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 520;
    if (height <= 0) height = 520;
    if (width <= 0) width = 800;

    const isMobile = window.innerWidth < 768;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0D1117');

    // 2. Camera Setup
    const aspect = width / height;
    const camera = new THREE.PerspectiveCamera(45, isNaN(aspect) ? 1.77 : aspect, 0.1, 1000);
    camera.position.set(22, 18, 22);

    // 3. Renderer Setup (Optimized for Mobile)
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: false, powerPreference: 'high-performance' });
    } catch (e) {
      console.error('WebGL initialization failed:', e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = isMobile ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Controls Setup (Full 360° Free Camera Rotation & Zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Full ground & isometric view
    controls.minDistance = 6;
    controls.maxDistance = 60;
    controls.target.set(0, 0, 0);

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    sunLight.position.set(15, 25, 12);
    sunLight.castShadow = true;
    const shadowRes = isMobile ? 1024 : 2048;
    sunLight.shadow.mapSize.width = shadowRes;
    sunLight.shadow.mapSize.height = shadowRes;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x7aaee8, 0.9);
    fillLight.position.set(-15, 12, -15);
    scene.add(fillLight);

    // 6. Materials
    const matGround = new THREE.MeshStandardMaterial({ color: 0x0D1117, roughness: 0.9 });
    const matRoad = new THREE.MeshStandardMaterial({ color: 0x161B22, roughness: 0.8 });
    const matStarbucks = new THREE.MeshStandardMaterial({ color: 0x1E3E34, roughness: 0.3, metalness: 0.2 });
    const matBloqueB = new THREE.MeshStandardMaterial({ color: 0x2C3844, roughness: 0.4 });
    const matBloqueC = new THREE.MeshStandardMaterial({ color: 0x3B2D4A, roughness: 0.4 });
    const matPadel = new THREE.MeshStandardMaterial({ color: 0x1B354C, roughness: 0.5 });
    const matPark = new THREE.MeshStandardMaterial({ color: 0x1A3323, roughness: 0.8 });
    const matTreeTrunk = new THREE.MeshStandardMaterial({ color: 0x4A3728, roughness: 0.9 });
    const matTreeFoliage = new THREE.MeshStandardMaterial({ color: 0x2E4A35, roughness: 0.6 });
    const matGoldAccent = new THREE.MeshStandardMaterial({ color: 0xFFE9A3, metalness: 0.6, roughness: 0.2 });
    const matGlass = new THREE.MeshPhysicalMaterial({ color: 0x7aaee8, transmission: 0.7, opacity: 0.8, transparent: true });

    // Interactive Objects Registry
    const interactiveObjects: THREE.Object3D[] = [];

    // 7. Construct 3D Scene Geometry

    // Ground & Grid
    const groundGeo = new THREE.PlaneGeometry(40, 40);
    const groundMesh = new THREE.Mesh(groundGeo, matGround);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    const grid = new THREE.GridHelper(40, 40, 0xFFE9A3, 0x2D3748);
    grid.position.y = 0.01;
    scene.add(grid);

    // Road (Av. Pedro de Valdivia)
    const roadGeo = new THREE.BoxGeometry(4, 0.1, 34);
    const roadMesh = new THREE.Mesh(roadGeo, matRoad);
    roadMesh.position.set(-14, 0.05, 0);
    roadMesh.receiveShadow = true;
    scene.add(roadMesh);

    // Starbucks A1 Building
    const sbGeo = new THREE.BoxGeometry(6, 3.2, 5);
    const sbMesh = new THREE.Mesh(sbGeo, matStarbucks);
    sbMesh.position.set(-8, 1.65, 5);
    sbMesh.castShadow = true;
    sbMesh.receiveShadow = true;
    sbMesh.userData = { name: 'Starbucks Drive-Thru', slug: 'starbucks-drive-thru' };
    scene.add(sbMesh);
    interactiveObjects.push(sbMesh);

    // Starbucks Roof Accent Pill
    const sbRoofGeo = new THREE.BoxGeometry(5.8, 0.3, 4.8);
    const sbRoofMesh = new THREE.Mesh(sbRoofGeo, matGoldAccent);
    sbRoofMesh.position.set(-8, 3.3, 5);
    scene.add(sbRoofMesh);

    // Bloque B (B1..B4)
    const bStores = [
      { name: 'Boulangerie', slug: 'boulangerie', x: -8 },
      { name: 'Pilates Studio', slug: 'pilates-studio', x: -4.2 },
      { name: 'Gimnasio Boutique', slug: 'gym-boutique', x: -0.4 },
      { name: 'Sempre Pasta', slug: 'sempre-pasta', x: 3.2 },
    ];

    bStores.forEach((st) => {
      const bGeo = new THREE.BoxGeometry(3.5, 4.0, 5);
      const bMesh = new THREE.Mesh(bGeo, matBloqueB);
      bMesh.position.set(st.x, 2.0, -6);
      bMesh.castShadow = true;
      bMesh.receiveShadow = true;
      bMesh.userData = { name: st.name, slug: st.slug };
      scene.add(bMesh);
      interactiveObjects.push(bMesh);

      // Glass Windows
      const winGeo = new THREE.BoxGeometry(3.3, 1.5, 0.1);
      const winMesh = new THREE.Mesh(winGeo, matGlass);
      winMesh.position.set(st.x, 2.0, -3.45);
      scene.add(winMesh);
    });

    // Bloque C (C1..C6)
    const cStores = [
      { name: 'La Ove Bee', slug: 'la-ove-bee', x: -3.5 },
      { name: 'Válgame Dios', slug: 'valgame-dios', x: -1.8 },
      { name: 'Cerámica Gres', slug: 'ceramica-gres', x: -0.1 },
      { name: 'Corredora de Propiedades', slug: 'corredora-propiedades', x: 1.6 },
      { name: 'Manos & Pies', slug: 'manos-pies', x: 3.3 },
      { name: 'Barbería Tradicional', slug: 'barberia', x: 5.0 },
    ];

    cStores.forEach((st) => {
      const cGeo = new THREE.BoxGeometry(1.5, 2.4, 3.5);
      const cMesh = new THREE.Mesh(cGeo, matBloqueC);
      cMesh.position.set(st.x, 1.25, 0);
      cMesh.castShadow = true;
      cMesh.receiveShadow = true;
      cMesh.userData = { name: st.name, slug: st.slug };
      scene.add(cMesh);
      interactiveObjects.push(cMesh);
    });

    // Canchas de Padel 1 & 2
    for (let i = 1; i <= 2; i++) {
      const px = 7.5 + (i - 1) * 4.2;
      const padelGeo = new THREE.BoxGeometry(3.8, 0.2, 7.5);
      const padelMesh = new THREE.Mesh(padelGeo, matPadel);
      padelMesh.position.set(px, 0.1, -5);
      padelMesh.receiveShadow = true;
      padelMesh.userData = { name: `Canchas de Pádel (Pista ${i})`, slug: 'canchas-padel' };
      scene.add(padelMesh);
      interactiveObjects.push(padelMesh);

      // Glass Walls
      const wallGeo = new THREE.BoxGeometry(3.8, 2.0, 0.1);
      const wallMesh = new THREE.Mesh(wallGeo, matGlass);
      wallMesh.position.set(px, 1.1, -1.25);
      scene.add(wallMesh);
    }

    // Parque & Area Verde Zone
    const parkGeo = new THREE.BoxGeometry(6.5, 0.3, 14);
    const parkMesh = new THREE.Mesh(parkGeo, matPark);
    parkMesh.position.set(12, 0.15, 1);
    parkMesh.receiveShadow = true;
    parkMesh.userData = { name: 'Área Verde & Parque Botánico' };
    scene.add(parkMesh);
    interactiveObjects.push(parkMesh);

    // 3D Trees
    const treeCoords = [
      [10, 5], [12, 6], [14, 4], [10, 0], [13, -1], [11, -5], [14, -4]
    ];
    treeCoords.forEach(([tx, tz]) => {
      const trunkGeo = new THREE.CylinderGeometry(0.15, 0.2, 1.4);
      const trunk = new THREE.Mesh(trunkGeo, matTreeTrunk);
      trunk.position.set(tx, 0.85, tz);
      scene.add(trunk);

      const leavesGeo = new THREE.IcosahedronGeometry(0.9, 1);
      const leaves = new THREE.Mesh(leavesGeo, matTreeFoliage);
      leaves.position.set(tx, 1.8, tz);
      leaves.castShadow = true;
      scene.add(leaves);
    });

    // Smart Click vs Drag Handler
    let pointerStartX = 0;
    let pointerStartY = 0;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      pointerStartX = e.clientX;
      pointerStartY = e.clientY;
    };

    const handlePointerUp = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - pointerStartX, e.clientY - pointerStartY);
      // Only execute raycast click if mouse was NOT dragged (drag distance < 6px)
      if (dist < 6) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(interactiveObjects, false);

        if (intersects.length > 0) {
          const clickedObj = intersects[0].object;
          if (clickedObj.userData && clickedObj.userData.name) {
            setSelectedObjName(clickedObj.userData.name);
            if (onSelectBuildingRef.current) {
              onSelectBuildingRef.current(clickedObj.userData.name);
            }
          }
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    // Resize Observer for 100% responsive canvas filling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let isMounted = true;

    const animate = () => {
      if (!isMounted) return;
      animationFrameId = requestAnimationFrame(animate);
      try {
        controls.update();
        renderer.render(scene, camera);
      } catch (err) {
        console.error('Render error:', err);
      }
    };
    animate();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // Mount ONCE, never unmounts or resets camera when parent re-renders!

  return (
    <div className="relative w-full h-full min-h-[520px] bg-[#0D1117] overflow-hidden">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Instructions Overlay */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 bg-[#080A0D]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-[#F5F3EA]">
        <Move3d className="w-3.5 h-3.5 text-[#FFE9A3]" />
        <span className="font-semibold text-[11px] uppercase tracking-wider text-[#FFE9A3]">
          Maqueta 3D Interactiva
        </span>
        <span className="text-[#F5F3EA]/60 text-[10px] hidden sm:inline">• Arrastra para girar 360° | Rueda para Zoom | Clic en edificio</span>
      </div>

      {/* Selected Building Badge */}
      {selectedObjName && (
        <div className="absolute bottom-4 left-4 z-20 bg-[#161B22]/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#FFE9A3]/50 text-xs font-bold text-[#FFE9A3] uppercase tracking-wider shadow-2xl flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FFE9A3]" />
          <span>Edificio 3D: {selectedObjName}</span>
        </div>
      )}
    </div>
  );
}
