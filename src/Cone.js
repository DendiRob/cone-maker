import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


function  Cone({radius, segments, height}) {
    const mountRef = useRef(null);
  
    useEffect(() => {
      const scene = new THREE.Scene();
      
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
  
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const container = mountRef.current;
      container.appendChild(renderer.domElement);
      // Создание конуса
      const geometry = new THREE.ConeGeometry(radius, height, segments);
      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const borderMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
      const baseMate = new THREE.MeshBasicMaterial({  color: 0xff0000 });
      const cone = new THREE.Mesh(geometry, baseMate);
      const borderMesh = new THREE.LineSegments(edgesGeometry, borderMaterial);
      cone.position.set(0,0,0);
      scene.add(cone);
      scene.add(borderMesh);



      camera.position.z = 30;

      const animate = () => {
        requestAnimationFrame(animate);
  
        // Вращение конуса
        cone.rotation.x = 1.5;
        cone.rotation.z += 0.01;
        cone.rotation.y += 0.01;
        borderMesh.rotation.x = 1.5;
        borderMesh.rotation.z += 0.01;
        borderMesh.rotation.y += 0.01;
  
        renderer.render(scene, camera);
      };
  
      animate();
  
      const handleResize = () => {
        const { innerWidth, innerHeight } = window;
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        //очистка сцены и DOM
        window.removeEventListener('resize', handleResize);

        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
        renderer.dispose();
        if (container) {
          container.removeChild(renderer.domElement);
        }
      };
    }, [radius, segments, height]);
  
    return <div ref={mountRef} />;
  }
  
  export default Cone;