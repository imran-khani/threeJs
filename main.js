import "./style.css";

import * as THREE from "three";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// scence
const scence = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 10, 20);

// Renderer
const Renderer = new THREE.WebGLRenderer();
Renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Renderer.domElement);

// orbit controls
const orbit = new OrbitControls(camera, Renderer.domElement);
orbit.update();

// Materials
const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffff });
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffff });
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xffff });

// Geometries
const boxGeometry = new THREE.BoxGeometry();
const spereGeometry = new THREE.SphereGeometry(4, 32, 32);
const planeGeometry = new THREE.PlaneGeometry(20, 20);

// Meshes
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const sphereMesh = new THREE.Mesh(spereGeometry, sphereMaterial);

// add meshes to the scene
scence.add(boxMesh, planeMesh, sphereMesh);
