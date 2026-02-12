"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroOrb() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    hostRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1.6, 48, 48);
    const material = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    let frameId = 0;
    const render = () => {
      if (!prefersReduced) {
        orb.rotation.y += 0.0025;
        orb.rotation.x += 0.001;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!hostRef.current) return;
      const { width, height } = hostRef.current.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height || 1;
      camera.updateProjectionMatrix();
    };

    handleResize();
    frameId = requestAnimationFrame(render);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={hostRef} className="h-full w-full" aria-hidden="true" />;
}
