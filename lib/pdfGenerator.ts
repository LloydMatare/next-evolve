//@ts-nocheck
// lib/pdfGenerator.ts
import { uploadToCloudinary } from '@/utils/cloudinary';
// import { PDFDocument, rgb } from 'pdf-lib';

export async function generateAttendeePDF(attendee: any) {
  // Create PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 600]);
  const { width, height } = page.getSize();
  
  // Add content to PDF
  page.drawText(`EVOLVE ICT Summit 2025`, {
    x: 50,
    y: height - 50,
    size: 20,
    color: rgb(0, 0, 0),
  });
  
  page.drawText(`Name: ${attendee.name}`, {
    x: 50,
    y: height - 100,
    size: 14,
    color: rgb(0, 0, 0),
  });
  
  page.drawText(`Organization: ${attendee.organization}`, {
    x: 50,
    y: height - 130,
    size: 14,
    color: rgb(0, 0, 0),
  });
  
  // Generate PDF bytes
  const pdfBytes = await pdfDoc.save();

  
  // Upload to Cloudinary for sharing - modified to work in Node.js
  const cloudinaryResponse = await uploadToCloudinary(
    Buffer.from(pdfBytes), 
    'pdf',
    `attendee-card-${attendee.name}.pdf`
  );
  return {
    publicUrl: cloudinaryResponse.secure_url
  };
}