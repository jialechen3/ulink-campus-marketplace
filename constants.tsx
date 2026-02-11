
import React from 'react';
import { Product, College, Message, Seller, User } from './types';
import { MOCK_USERS, MOCK_PRODUCTS } from './mockData';

export { MOCK_USERS, MOCK_PRODUCTS };

export const DEFAULT_AVATAR = "/default-avatar.png";
export const DEFAULT_PRODUCT_IMAGE = "/no-image.png";
export const LEGACY_DEFAULT_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400";




// Mock products are now imported from mockData.ts

export const MOCK_COLLEGES: College[] = [
  { id: '1', name: "Stanford University", location: "Palo Alto, CA", image: "/logos/stanford.png", coordinates: { lat: 37.4275, lng: -122.1697 } },
  { id: '2', name: "Harvard University", location: "Cambridge, MA", image: "/logos/harvard.png", coordinates: { lat: 42.3770, lng: -71.1167 } },
  { id: '3', name: "UC Berkeley", location: "Berkeley, CA", image: "/logos/berkeley.png", coordinates: { lat: 37.8715, lng: -122.2730 } },
  { id: '4', name: "NYU", location: "New York, NY", image: "/logos/nyu.png", coordinates: { lat: 40.7295, lng: -73.9965 } },
  { id: '5', name: "MIT", location: "Cambridge, MA", image: "/logos/mit.png", coordinates: { lat: 42.3601, lng: -71.0942 } },
  { id: '6', name: "UCLA", location: "Los Angeles, CA", image: "/logos/ucla.png", coordinates: { lat: 34.0689, lng: -118.4452 } },

  // SUNY System
  { id: 'suny-1', name: "SUNY Stony Brook", location: "Stony Brook, NY", image: "/logos/stonybrook.png", coordinates: { lat: 40.9124, lng: -73.1234 } },
  { id: 'suny-2', name: "University at Buffalo", location: "Buffalo, NY", image: "/logos/buffalo.png", coordinates: { lat: 43.0019, lng: -78.7891 } },
  { id: 'suny-3', name: "SUNY Albany", location: "Albany, NY", image: "/logos/albany.png", coordinates: { lat: 42.6865, lng: -73.8232 } },
  { id: 'suny-4', name: "SUNY Binghamton", location: "Binghamton, NY", image: "/logos/binghamton.png", coordinates: { lat: 42.0893, lng: -75.9699 } },
  { id: 'suny-5', name: "SUNY Oswego", location: "Oswego, NY", image: "/logos/oswego.png", coordinates: { lat: 43.4526, lng: -76.5164 } },
  { id: 'suny-6', name: "SUNY Geneseo", location: "Geneseo, NY", image: "/logos/geneseo.png", coordinates: { lat: 42.7951, lng: -77.8214 } },
  { id: 'suny-7', name: "SUNY Cortland", location: "Cortland, NY", image: "/logos/cortland.png", coordinates: { lat: 42.5976, lng: -76.1808 } },
  { id: 'suny-8', name: "SUNY New Paltz", location: "New Paltz, NY", image: "/logos/newpaltz.png", coordinates: { lat: 41.7392, lng: -74.0844 } },
  { id: 'suny-9', name: "Fashion Institute of Technology", location: "New York, NY", image: "/logos/fit.png", coordinates: { lat: 40.7471, lng: -73.9941 } },
  { id: 'suny-10', name: "SUNY Farmingdale", location: "Farmingdale, NY", image: "/logos/farmingdale.png", coordinates: { lat: 40.7516, lng: -73.4287 } },

  // Los Angeles Areas
  { id: 'la-1', name: "University of Southern California", location: "Los Angeles, CA", image: "/logos/usc.png", coordinates: { lat: 34.0224, lng: -118.2851 } },
  { id: 'la-2', name: "Caltech", location: "Pasadena, CA", image: "/logos/caltech.png", coordinates: { lat: 34.1376, lng: -118.1253 } },
  { id: 'la-3', name: "Loyola Marymount University", location: "Los Angeles, CA", image: "/logos/lmu.png", coordinates: { lat: 33.9701, lng: -118.4182 } },
  { id: 'la-4', name: "CSUN", location: "Northridge, CA", image: "/logos/csun.png", coordinates: { lat: 34.2383, lng: -118.5236 } },
  { id: 'la-5', name: "CSU Los Angeles", location: "Los Angeles, CA", image: "/logos/calstatela.png", coordinates: { lat: 34.0664, lng: -118.1685 } },
  { id: 'la-6', name: "Pepperdine University", location: "Malibu, CA", image: "/logos/pepperdine.png", coordinates: { lat: 34.0416, lng: -118.7090 } },
  { id: 'la-7', name: "Occidental College", location: "Los Angeles, CA", image: "/logos/occidental.png", coordinates: { lat: 34.1274, lng: -118.2117 } }
];


export const MOCK_MESSAGES: Message[] = [
  { id: '1', senderId: '1', senderName: "Ethan Carter", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5SllOXpMybgjENQGKSO2_kBgkkrPCrfe4u9vMPhpCk68Dsp_vrqWpfaCfu66VFG4m2kYV-fxrrteaaG_JLXqin4C3Wy2f39LyJQ_o-EITPtU9e1eaTUejPNdUgfJ9Z5BBWqaGNIg_vgJgPzJlRBpQWeHsewv1UrB0Hzc4TvIIv-YmhzSg7ae9D-wn8BFmi9Y9_IUIz1nj42mB6dwtjNpsOWQxSD07OkOHsGvoUjJyX12EhVtHs1scC3QKAQMFsYr4lIlJtwJ1W8e3", text: "Hey, is this still available?", time: "10m" },
  { id: '2', senderId: '2', senderName: "Olivia Bennett", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhOWX_TDqEZzmnSXa8HQVWIxuRipmIwlphmQ4HbiMjpicY5FpK-4ADvRl2GZ4MysU2Q7MR5GIvlmwJpgwmIxg6d6VZvfVvjGHHWShaL9gwjx69enId5Iow48ihtnxHxpMze8Le4mrKpquuw4vw0L_Lcn2IA5iYmuSFCC_sWH9RY5jsg-YRY_EAARWll6pWCmwk6uaMaIIDayb85o9-j7e9SMcFc_qLc6VnW3yduxjudPfNyBJEH-8BTp5ljGjA63JIA_adsKg-Nczr", text: "I'm interested in buying this.", time: "2h" },
  { id: '3', senderId: '3', senderName: "Noah Thompson", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYLFXrnWMeqObYpfYhD-hUwdXTqFpSZwUEhWzlQDNAeiLurCdZd8dhroMzgRW8TGjxFiYo-_En8eeER9UEiIKz1bvwgoPeyRg4L7tXewhs9NGWwOM213_-tDu-lQHDxC6Vs-BXsM3T8RxbhMukCtzHtGVH-JgRCKJaPsUghaS21Gf4_RC19qTD7EYQCjm2HvfFh1-3E3xSIFUa3Uyvbc7G1duM799gBdJPGiYc7CImtb_jzkWyhKcKws6YKebG8xbqogs1r9mjehjO", text: "Can you meet tomorrow?", time: "1d" }
];

export const ICONS = {
  List: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" /></svg>,
  Tray: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.69A15.86,15.86,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z" /></svg>,
  MagnifyingGlass: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" /></svg>,
  House: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" /></svg>,
  PlusSquare: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" /></svg>,
  User: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" /></svg>,
  Gear: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" /></svg>,
  ArrowLeft: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>,
  X: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>,
  Pencil: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" /></svg>,
  Location: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.1,0A254.19,254.19,0,0,0,174,218.25c27.49-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,1,1,144,0C200,161.25,144.53,209,128,222Z" /></svg>,
  ChevronRight: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" /></svg>,
  Trash: <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" /></svg>,
  Chat: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M140.87,48.26l-3.3-3.3A24,24,0,0,0,120.59,38H48A16,16,0,0,0,32,54V202a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V142a40,40,0,0,0-5.87-20.27l-53.26-73.47ZM48,54h72.59a8,8,0,0,1,5.66,2.34l3.3,3.3.1.1,53.26,73.47A24,24,0,0,1,184,142v60a.72.72,0,0,1-.05.21H184l-.32,0H48V54Zm64,64a8,8,0,0,1,8,8v48a8,8,0,0,1-16,0V126A8,8,0,0,1,112,118Zm40,0a8,8,0,0,1,8,8v48a8,8,0,0,1-16,0V126A8,8,0,0,1,152,118Z" /></svg>
};
