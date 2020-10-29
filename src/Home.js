import React from 'react'
import photo1 from "./image1.jpg"
import photo2 from "./image2.jpg" 
import "./Home.css"
import Comm from "./Comm.js"
import AffiliateLinks from "./AffiliateLinks.js"
function Home() {
    return (
        <div>
            <h1>IPhone 12 Pro</h1>
             <span id="im1"><img src={photo1} alt="ab" width="300" height="400"></img></span>
            <h1>Buy Now at the best price</h1>
            <AffiliateLinks/>
            <h1>Introduction</h1>
            <p>Blast Past Fast. It's an apt tagline with Apple skipping
             the S models and going straight to the iPhone 12 from the already fast 
             iPhone 11.But it's not just the improved speed that you'd be getting. 
             The iPhone 12 also comes with a slew of other upgrades, including a new design
              with improved durability, an OLED screen, and 5G support. The new OLED screen
               has smaller-than-ever bezels, plus there is also the new magnetically attached 
               MagSafe charging support. It is also one of the lightest iPhones you can buy. 
               What's not to like?</p>
            <span id="im2"><img src={photo2} ></img></span>
            <p>All iPhone 12s adopt a new design language, and that's probably 
            why Apple skipped the S moniker, which was due this year. Honestly, 
            the design is not exactly new. It's more like Apple is returning to its
            roots by bringing back the iconic design of the iPhone Series 4 and 5.
            And boy, have we missed that.The best part about the new iPhone 12 
            is that you can get it in mini version at an even lower price without 
            losing a single feature. Apple just can't make do without controversy,
            and 2020 is no different. This year the iPhones are losing the bundled in-box
            accessories - no more chargers, no more EarPods. What you get in the new 
            unbelievably thin box is just a USB cable. And we fear it's only a matter
            of time until this one goes away, too.</p>
            <h2>Specs</h2>
            <p>
                <ul>
                    <li><strong>Body: </strong> Aluminum frame with matte finish, Ceramic Shield front with oleophobic coating, Ceramic Shield back with glossy finish, IP68 certified for water and dust resistance. Black, White, Green, Blue, Red color options. 146.7 x 71.5 x 7.4 mm, 164 g.</li>
                    <li><strong>Display: </strong>6.1" Retina XDR OLED screen of 1170 x 2532 px resolution, 460ppi, 600 nits, 120Hz touch sensing. HDR10, Dolby Vision support, wide color gamut. True Tone.</li>
                    <li><strong>Chipset: </strong>Apple A14 Bionic chip (5nm) - Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm with 3.1GHz Turboboost) Apple CPU, four-core Apple GPU, 16-core Apple NPU 4-gen</li>
                    <li><strong>Memory: </strong>4GB of RAM; 64/256/512GB of internal storage</li>
                    <li><strong>Rear Camera: </strong> Dual 12MP camera: 26mm main wide-angle, F/1.6, OIS, Dual Pixel AF; 13mm ultrawide-angle, F/2.4, 120-degree field of view; dual-LED flash with slow sync. Night Mode, Smart HDR 3, Deep Fusion.</li>
                    <li><strong>Video Recording: </strong>2160p@60/30fps, 1080p@30/60/120/240fps video recording with wider dynamic range and spatial sound, OIS + EIS, Dolby Vision (30fps only)</li>
                    <li><strong>Front Camera: </strong>Dual camera - 23mm 12MP F/2.2 front-facing camera with HDR mode + 3D TOF camera; Night Mode, Smart HDR 3, Deep Fusion. 2160p@60/30fps, 1080p@30/60/120fps video recording with wider dynamic range and spatial sound, EIS.</li>
                    <li><strong>Connectivity: </strong>Dual SIM, 5G, 4G; Wi-Fi a/b/g/n/ac/6; Bluetooth 5.0; Lightning port; GPS with A-GPS, GLONASS, GALILEO, QZSS; NFC; Apple U1 chip ultrawideband</li>
                    <li><strong>Battery: </strong>2,815 mAh battery, 20W fast charging, 15 Qi wireless charging (MagSafe)</li>
                    <li><strong>Misc: </strong>Face ID through dedicated TrueDepth camera, stereo speakers, Taptic Engine</li>
                </ul>
            </p>
            <Comm/>
      </div>
    )
}
export default Home
