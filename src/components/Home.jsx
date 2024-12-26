import React from 'react';
import NavScrollExample from './navbar';
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  // Dummy data for tablet cards
  const tabletData = [

    { id: 1, name: 'Aspirin', price: '$10.99', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets-500x500.jpg' },
    { id: 2, name: 'Ibuprofen', price: '$15.99', image: 'https://5.imimg.com/data5/QD/KO/MY-608147/untitled-2-500x500.jpg' },
    { id: 3, name: 'Acetamin', price: '$8.99', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322842131/MA/OY/IB/87700199/paracetamol-tablets-i-p-650-mg-500x500.jpg' },
    { id: 4, name: 'Loratadine', price: '$12.99', image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/393964680/PC/QD/KZ/212170333/10mg-loravil-loratadine-tablets-i-p-500x500.jpg' },
    { id: 5, name: 'Omeprazole', price: '$9.99', image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/KC/RG/DY/69323902/omeprazole-capsules-i-p-500x500.jpg' },
    { id: 6, name: 'Simvastatin', price: '$14.99', image: 'https://5.imimg.com/data5/AD/IF/MY-69880038/intaxel-260mg-injection-jpg-250x250.jpg' },
    { id: 7, name: 'Metformin', price: '$11.99', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/343048443/IA/UP/FP/156521613/metformin-500mg-tablet-500x500.png' },
    { id: 8, name: 'Atorvastatin', price: '$13.99', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/CQ/CM/TE/94176096/toravast-10-mg-500x500.jpeg' },
    { id: 9, name: 'Amlodipine', price: '$7.99', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/340015917/QZ/QS/RI/90724468/telmisartan-i-p-40-mg-amlodipine-i-p-5-mg-tablets-500x500.jpeg' },
    { id: 10, name: 'Albuterol', price: '$16.99', image: 'https://4.imimg.com/data4/FG/EX/GLADMIN-179967/albuterol-250x250.jpg' }
  ];

  return (
    <div style={{ textAlign: 'center',backgroundColor: '#eaf6fd' }}>
    <NavScrollExample />
    {/* Carousel */}
    <Carousel style={{ maxWidth: '1350px', margin: 'auto', marginTop: '10px' }}>
    <Carousel.Item>
    <img
            className="d-block w-100"
            src="https://static.theprint.in/wp-content/uploads/2021/02/brandma-26.02.jpg"
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg"
            alt="Second slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/e/new_gluco_web_banner.jpg?tr=w-400,q-100,f-webp,c-at_max"
            alt="Third slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/8/2/824x400world_oral19mar24_1.jpg?tr=w-400,q-100,f-webp,c-at_max"
            alt="Fourth slide"
          />
        
        </Carousel.Item>
      </Carousel>
      {/* Tablet Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tabletData.map(tablet => (
          <div key={tablet.id} style={{ width: '200px', margin: '10px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <img src={tablet.image} alt={tablet.name} style={{ width: '100%', marginBottom: '10px' }} />
            <h2>{tablet.name}</h2>
            <p>Price: {tablet.price}</p>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
