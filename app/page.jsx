"use client"; // ✅ must be the first line

import { useState, useEffect, useRef } from 'react'
import PlayerComponent from '../components/Player';
import LimaForm from '../components/LimaForm'


export default function HomePage() {
  return (
    <>
      {/* <PlayerComponent /> */}
      <LimaForm />
    </>)
}