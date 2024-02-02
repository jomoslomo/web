import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModelRenderer = ({ stlUrl }) => {
  const ref = useRef();
  const containerRef = useRef(); // Reference to the container
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Update size based on the container
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    // Set initial size
    updateSize();

    // Adjust size on window resize
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    // Ensure container dimensions are set
    if (containerSize.width === 0 || containerSize.height === 0) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerSize.width, containerSize.height);
    ref.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => renderer.render(scene, camera));

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    const loader = new STLLoader();
    loader.load(stlUrl, (geometry) => {
      console.log("STL Loaded");
      geometry.center();
      const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(0.1, 0.1, 0.1);
      scene.add(mesh);

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error('Error loading STL:', error);
    });

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
    };
  }, [stlUrl, containerSize.width, containerSize.height]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px' }}> {/* Adjust height as needed */}
      <div ref={ref} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default ThreeDModelRenderer;
