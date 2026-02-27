import './App.css'
import hearts from './images/hearts.png'

function App() {
  return (
  <div>
    <h1>Alternative Artists Live</h1> 
    <h2>Take a look at shows in your area!</h2>

    <img className="divider" src={hearts} alt="Heart Divider"/>

    <div className="cardGrid">

        <div className="card">
          <img className="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jeJKosFBatdGNlnxZXg5i7TdJr0qeLiuoA&s" alt="Wind Walkers"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>I Don't Belong Here (EP)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8kSxNXFsfPVam92wOyQR2yZuS4ji0gkNVg&s" alt="Wind Walkers Album"/>
            <a href="https://windwalkersofficial.com/pages/tour" target="_blank">Find Shows</a>

          </div>
          <h3>Wind Walkers</h3>
          <p>Metalcore & Alternative Metal</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://photos.bandsintown.com/large/18919724.jpeg" alt="Memphis May Fire"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Shapeshifter (Album)</b></p>
            <img className="overlayImg" src="https://m.media-amazon.com/images/I/81ds966DRaL._UF1000,1000_QL80_.jpg" alt="Memphis May Fire Album"/>
            <a href="https://www.memphismayfire.com/#tour" target="_blank">Find Shows</a>
          </div>
          <h3>Memphis May Fire</h3>
          <p>Alternative Metal, Metalcore, Post-Hardcore & Heavy Metal</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://yt3.googleusercontent.com/dFUUWDg5Q8MplgR63sR1HfVUeHHAC8w9jOQusYrRnhHu0BS_SFI9JBGOAQmoTPNWA6FTWggg=s900-c-k-c0x00ffffff-no-rj" alt="The Home Team"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>The Crucible Of Life (Deluxe Edition)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjq3Enl70KsEGsGnRXk58SSsw0wQ6vdeZcg&s" alt="The Home Team Album"/>
            <a href="https://www.thehometeammerch.com/pages/tour-1" target="_blank">Find Shows</a>
          </div>
          <h3>The Home Team</h3>
          <p>Heavy Pop, Alternative Rock & Pop Rock</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://bookingagentinfo.com/wp-content/uploads/2024/02/ab6761610000e5ebfa531df2dc093b0847214bff.jpg" alt="Arrows in Action"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>I Think I've Been Here Before (Album)</b></p>
            <img className="overlayImg" src="https://f4.bcbits.com/img/a1729259656_16.jpg" alt="Arrows in Action Album"/>
            <a href="https://arrowsinaction.com/home#tourdates" target="_blank">Find Shows</a>
          </div>
          <h3>Arrows in Action</h3>
          <p>Pop Rock, Alternative Rock & Indie Rock</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://i.scdn.co/image/ab6761610000e5eb301872739bb2c5c665f4d7de" alt="Hail the Sun"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>cut. turn. fade. back. (Album)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKJbg3fiOHbguAT8v4wbx9_WMz-N-oNzj3w&s" alt="Hail the Sun Album"/>
            <a href="https://equalvision.com/pages/hail-the-sun-tour-dates" target="_blank">Find Shows</a>
          </div>
          <h3>Hail the Sun</h3>
          <p>Progressive Post-Hardcore, Math Rock, Experimental Rock & Swancore</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487593ddbecc58a068276411f" alt="Bilmuri"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>TWICE (Single)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxubbOTKp4DVTjJkNc_8ZpgVfrUbwNePZlg&s" alt="Bilmuri Album"/>
            <a href="https://www.bilmuri.com/tour" target="_blank">Find Shows</a>
          </div>
          <h3>BILMURI</h3>
          <p>Post-Hardcore, Country Metalcore & Emo</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://makariband.com/cdn/shop/files/Makari_promo_1.jpg?v=1736892897" alt="Makari"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Disappearing Act (Single)</b></p>
            <img className="overlayImg" src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b3/e1/b8/b3e1b8df-e277-b82d-59bd-e33905113838/artwork.jpg/600x600cc.webp" alt="Makari Album"/>
            <a href="https://makariband.com/pages/tour" target="_blank">Find Shows</a>
          </div>
          <h3>Makari</h3>
          <p>Progressive Rock, Post-Hardcore & Alternative Rock</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://images-r2-1.thebrag.com/rs/uploads/2025/12/dayseeker-1.jpg" alt="Dayseeker"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Creature In The Black Night (Album)</b></p>
            <img className="overlayImg" src="https://cdn.shopify.com/s/files/1/0689/6061/6685/files/QEU__6i.png?v=1752058705" alt="Dayseeker Album"/>
            <a href="https://dayseeker.band/pages/tour" target="_blank">Find Shows</a>
          </div>
          <h3>Dayseeker</h3>
          <p>Melodic Metalcore, Post-Hardcore & Rock</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://cdn.mos.cms.futurecdn.net/DdhW2cpUMrWcrxMJRXkrKi.jpg" alt="Avenged Sevenfold"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Magic (Single)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFN0uejPO5pRWcBoD2fCKOqo6L8R5zDEMhA&s" alt="Avenged Sevenfold Album"/>
            <a href="https://www.avengedsevenfold.com/tour" target="_blank">Find Shows</a>
          </div>
          <h3>Avenged Sevenfold</h3>
          <p>Heavy Metal, Hard Rock & Progressive Metal</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://s1.ticketm.net/dam/a/b0c/fea4c671-2950-4fd8-9b27-b1295823bb0c_RETINA_PORTRAIT_3_2.jpg" alt="Bad Omens"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Left For Good (Single)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZyUK3BPD_AQKH-6MqU3HS5s4z7FypyAMmw&s" alt="Bad Omens Album"/>
            <a href="https://badomensofficial.com/tour" target="_blank">Find Shows</a>
          </div>
          <h3>Bad Omens</h3>
          <p>Metalcore & Alternative Metal</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://www.radarfestival.co.uk/wp-content/uploads/2024/02/CASKETS-AUS-PROMO-PIC-3-1024x1024.jpg" alt="Caskets"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Good Enough (feat. Caskets)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TKnwEvKm_0JRQ3b1O_fx-C-eR86IGn5HMQ&s" alt="Caskets Album"/>
            <a href="https://shopus.casketsofficial.com/pages/tour" target="_blank">Find Shows</a>
          </div>
          <h3>Caskets</h3>
          <p>Post-Hardcore, Alternative Rock & Metalcore</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://images.squarespace-cdn.com/content/v1/50df1cc5e4b0a05702ac0622/1568573393745-LPDSUA30ZS3JU4XEY0E1/Screen+Shot+2019-09-15+at+2.36.12+PM.png" alt="STARSET"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>WE ARE EMPIRE (Single)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdMkZVn3t9kbit6T1VnmUo_OwsqWEqdsteA&s" alt="STARSET Album"/>
            <a href="https://www.starsetonline.com/#tour" target="_blank">Find Shows</a>
          </div>
          <h3>STARSET</h3>
          <p>Electronic Rock, Hard Rock & Alternative Metal</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://spaces.rocksound.tv/uploads/2025/09/nevertel-press.jpg" alt="Nevertel"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>Start Again (Album)</b></p>
            <img className="overlayImg" src="https://res.cloudinary.com/epitaph/image/upload/h_925,w_925/v1/epitaph/releases/88089_Nevertel_StartAgain_3kpx" alt="Nevertel Album"/>
            <a href="https://www.nevertelband.com/tour" target="_blank">Find Shows</a>
          </div>
          <h3>Nevertel</h3>
          <p>Alternative Rock, Nu-Metal & EDM</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6e8gD-2X_sUxZ8kQdRMnaFW2EQa9u2CWqA&s" alt="Imminence"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>The Return of The Black (Album)</b></p>
            <img className="overlayImg" src="https://i.scdn.co/image/ab67616d0000b273a403369f4a18977c959a59b5" alt="Imminence Album"/>
            <a href="https://imminenceswe.com/pages/tour-dates" target="_blank">Find Shows</a>
          </div>
          <h3>Imminence</h3>
          <p>Alternative metalcore, Post-Hardcore, Violincore</p>
        </div>

        <div className="card">
          <img className="cardImg" src="https://www.worcestermag.com/gcdn/authoring/authoring-images/2025/12/08/NTEG/87674683007-four-year-strong-2025.jpeg?crop=5759,3241,x0,y299&width=3200&height=1801&format=pjpg&auto=webp" alt="Four Year Strong"/>
          <div className="cardOverlay">
            <h2>Latest Release</h2>
            <p><b>WHIPLASH (Single)</b></p>
            <img className="overlayImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjegaYqHRKSWqN97BvCXkdL3lB6tEV8HnnvA&s" alt="Four Year Strong Album"/>
            <a href="https://fouryearstrong.com" target="_blank">Find Shows</a>
          </div>
          <h3>Four Year Strong</h3>
          <p>Pop-Punk, Alternative Rock, Easycore</p>
        </div>

    </div>
  </div>
  )
}

export default App