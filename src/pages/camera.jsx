import React, { useEffect, useRef } from 'react';
import { bootstrapCameraKit } from '@snap/camera-kit';

const Camera = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const initializeCamera = async () => {
      try {
        // Initialize Camera Kit
        const cameraKit = await bootstrapCameraKit({
          apiToken:
            'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM5OTkwNjg5LCJzdWIiOiI4Y2Y1MWFlYS1hYWNmLTQzMTQtYTJlMS03ZjExYzNmZTgzMmR-UFJPRFVDVElPTn4wMTljNzRlYS1mNDRhLTQ2M2EtOTcxZS1mOTg2N2VkMTkzZTkifQ.ln0VilzV77QALVPDMgaZkTNE5hOb_50lqifO4PP0Or4',
        });

        // Get the canvas element
        const liveRenderTarget = canvasRef.current;

        // Create a Camera Kit session
        const session = await cameraKit.createSession({
          liveRenderTarget,
        });

        // Request camera access
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // Set the media stream as the session source
        await session.setSource(mediaStream);

        // Start the session
        await session.play();

        console.log('Camera session started successfully!');
      } catch (error) {
        console.error('Error initializing Camera Kit:', error);
      }
    };

    initializeCamera();
  }, []);

  return (
    <div>
      <h1>Camera Page</h1>
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ border: '1px solid black' }}
      />
    </div>
  );
};

export default Camera;