'use strict';

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

const exploreForm = document.getElementById('exploreForm');
const indulgeForm = document.getElementById('indulgeForm');
const resultDiv = document.getElementById('result');

exploreForm.addEventListener('submit', function(event) {
    event.preventDefault();
    generateSuggestions('explore');
});

indulgeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    generateSuggestions('indulge');
});

function generateSuggestions(type) {
    const environment = document.querySelector(`#${type}Form input[name="environment"]:checked`).value;
    const priceRange = document.querySelector(`#${type}Form input[name="priceRange"]:checked`).value;

    let suggestions = '';

    if (type === 'explore' && environment === 'indoor' && priceRange === '0-25') {
        suggestions = `
            <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Discovery Place Science</button>
                <div class="panel">
                    <p><b> Cost:</b> $23 for adults
                    <p><b> Location:</b> 168 W 6th St, Charlotte, NC 28202
                    <p> Explore interactive science exhibits, an aquarium, and hands-on experiments. Perfect for a fun and educational outing. </p>
                </div>
                <button class="accordion">Abari Game Bar</button>
                <div class="panel">
                    <p> <b> Cost:</b> Free entry (pay per game, typically $0.25–$0.50 each) </p>
                    <p> <b> Location:</b>  1015 Seigle Ave, Charlotte, NC 28205 </p>
                    <p> A retro arcade and bar featuring vintage pinball and arcade games. Ideal for gaming enthusiasts. </p>
                </div>
                <button class="accordion">Mint Museum Uptown</button>
                <div class="panel">
                    <p> <b> Cost:</b> Free after 5 PM on Wednesdays, $15 otherwise </p>
                    <p> <b> Location:</b>  at Levine Center for the Arts, 500 S Tryon St, Charlotte, NC 28202 </p>
                    <p> Discover incredible art collections, from contemporary pieces to ancient artifacts, in a beautiful modern setting. </p>
                </div>
                <button class="accordion">NODA Company Store Trivia Nights</button>
                <div class="panel">
                    <p> <b> Cost:</b> Free (optional drinks/snacks under $25) </p>
                    <p> <b> Location:</b>  3221 Yadkin Ave, Charlotte, NC 28205 </p>
                    <p> Participate in team trivia while enjoying a cozy atmosphere and local beverages. </p>
                </div>
                <button class="accordion">UNC Charlotte Botanical Gardens </button>
                <div class="panel">
                    <p> <b> Cost:</b> Free (donations appreciated) </p>
                    <p> <b> Location:</b>  9090 Craver Rd, Charlotte, NC 28262 </p>
                    <p>Description: Explore the lush indoor greenhouse and gardens filled with exotic plants, succulents, and tropical species. It's a peaceful and educational activity perfect for plant lovers or those looking to relax in nature without stepping outdoors. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'indoor' && priceRange === '25-50') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Escape Tactic</button>
                <div class="panel">
                    <p><b> Cost:</b> $30–$40 per person </p>
                    <p><b> Location:</b> 130 Southside Dr, Charlotte, NC 28217 </p>
                    <p> Solve puzzles and complete challenges in immersive escape room scenarios. Great for groups or couples seeking adventure. </p>
                </div>
                <button class="accordion">Topgolf Charlotte</button>
                <div class="panel">
                    <p> <b> Cost:</b> $27–$47 per hour (up to 6 players per bay) </p>
                    <p> <b> Location:</b>  9110 Drivers Way, Charlotte, NC 28262 </p>
                    <p> Enjoy climate-controlled bays for hitting golf balls with fun, interactive scoring games. Ideal for casual or competitive fun. </p>
                </div>
                <button class="accordion">The Dinner Detective Interactive Murder Mystery Show</button>
                <div class="panel">
                    <p> <b> Cost:</b>  $49.99 per ticket (includes dinner) </p>
                    <p> <b> Location:</b> 5624 Westpark Dr Charlotte, NC 28217 </p>
                    <p> Become part of the action as you solve a hilarious murder mystery over a multi-course dinner. </p>
                </div>
                <button class="accordion">Bowlero Matthews</button>
                <div class="panel">
                    <p> <b> Cost:</b> $30–$50 per hour (lane rental for up to 6 players) </p>
                    <p> <b> Location:</b> 11210 Brigman Rd, Matthews, NC 28105 </p>
                    <p> Go bowling in a high-energy atmosphere, complete with an arcade and lounge area. </p>
                </div>
                <button class="accordion">Wine & Design Charlotte </button>
                <div class="panel">
                    <p> <b> Cost:</b> $39 per session (supplies included) </p>
                    <p> <b> Location:</b> 1419 East Blvd Suite J, Charlotte, NC 28203 </p>
                    <p> Sip wine and paint your own masterpiece in a guided, stress-free class. Perfect for a creative and relaxing experience. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'indoor' && priceRange === '50-100') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">The Escape Game Charlotte </button>
                <div class="panel">
                    <p><b> Cost:</b> $45–$60 per person </p>
                    <p><b> Location:</b> 8111 Concord Mills Boulevard #129B, Concord, NC 28027 </p>
                    <p> Experience one of the highest-rated escape rooms in the area, with unique, themed rooms that offer an immersive and challenging experience for small groups. </p>
                </div>
                <button class="accordion">Cooking Class at Sur La Table </button>
                <div class="panel">
                    <p> <b> Cost:</b> $69–$89 per person </p>
                    <p> <b> Location:</b>  4400 Sharon Rd Suite BO3A, Charlotte, NC 28211 </p>
                    <p> Take a hands-on cooking class taught by professional chefs. Classes cover a variety of cuisines and techniques, offering a fun and educational experience. </p>
                </div>
                <button class="accordion"> CLT Comedy Zone (Premium Seating) </button>
                <div class="panel">
                    <p> <b> Cost:</b>   $50–$75 per ticket </p>
                    <p> <b> Location:</b> 900 North Carolina Music Factory Blvd B3, Charlotte, NC 28206 </p>
                    <p> Enjoy premium seating for top comedians at the Comedy Zone. The price includes better seating and access to the best shows in Charlotte's comedy scene. </p>
                </div>
                <button class="accordion">Indoor Go-Kart Racing at K1 Speed</button>
                <div class="panel">
                    <p> <b> Cost:</b> $60–$80 per person (for 2-3 races) </p>
                    <p> <b> Location:</b> 800 Derita Rd #K, Concord, NC 28027 </p>
                    <p> Treat yourself to a relaxing massage or facial, ideal for unwinding and relieving stress after a busy week. </p>
                </div>
                <button class="accordion">Spa Treatments at Massage Envy </button>
                <div class="panel">
                    <p> <b> Cost:</b>  $60–$90 for a 1-hour massage or facial </p>
                    <p> <b> Location:</b> 1730 East Woodlawn Road Charlotte, NC 28209 </p>
                    <p> Sip wine and paint your own masterpiece in a guided, stress-free class. Perfect for a creative and relaxing experience. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'indoor' && priceRange === '100+') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Luxury Spa Day at The Ballantyne Spa </button>
                <div class="panel">
                    <p><b> Cost:</b> $120–$250+ (depending on treatment) </p>
                    <p><b> Location:</b> 10000 Ballantyne Commons Pkwy, Charlotte, NC 28277 </p>
                    <p> Indulge in a luxurious spa experience with a variety of treatments like massages, facials, and body scrubs. The spa offers packages for a full day of relaxation. </p>
                </div>
                <button class="accordion">Private Indoor Skydiving at iFly Charlotte </button>
                <div class="panel">
                    <p> <b> Cost:</b> $120–$150+ per person </p>
                    <p> <b> Location:</b>  7840 Lyles Ln NW, Concord, NC 28027 </p>
                    <p> Experience the thrill of skydiving indoors with a private session at iFly. You'll have a chance to fly in a vertical wind tunnel for a unique adrenaline rush. </p>
                </div>
                <button class="accordion"> Golf Lesson at The Golf Academy at Quail Hollow Club </button>
                <div class="panel">
                    <p> <b> Cost:</b> $150–$300+ </p>
                    <p> <b> Location:</b> 3700 Gleneagles Rd, Charlotte, NC 28210 </p>
                    <p> Take a private golf lesson from a PGA-certified instructor at the prestigious Quail Hollow Club, ideal for golf enthusiasts wanting to improve their game. </p>
                </div>
                <button class="accordion">Indoor Paintball at Paintball Central</button>
                <div class="panel">
                    <p> <b> Cost:</b> $100–$200+ per person (depending on gear and session length) </p>
                    <p> <b> Location:</b> 1680 East Main Street (900 S. Anderson Rd.) Rock Hill, SC 29730 </p>
                    <p> Enjoy a private paintball session in an indoor arena, complete with all the gear and a few hours of action-packed gameplay. A great group activity with a bit of competition. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'outdoor' && priceRange === '0-25') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Parks and Green Spaces (Bundle) </button>
                <div class="panel">
                    <p><b> Cost:</b> Free </p>
                    <p><b> Location:</b> Various parks listed in description </p>
                    <p> Enjoy various parks and green spaces around Charlotte, including Freedom Park, Romare Bearden Park, and The Greenway. These parks offer walking trails, picnic areas, beautiful gardens, and scenic views, perfect for outdoor activities such as hiking, jogging, or simply relaxing in nature. </p>
                </div>
                <button class="accordion">Charlotte Rail Trail </button>
                <div class="panel">
                    <p> <b> Cost:</b> Free </p>
                    <p> <b> Location:</b> E Morehead St, Charlotte, NC </p>
                    <p> This 3.5-mile trail connects various parts of Charlotte and features outdoor art, murals, and local spots to explore. It's perfect for walking, biking, or enjoying the urban landscape. </p>
                </div>
                <button class="accordion"> Lake Norman State Park (Beach Area) </button>
                <div class="panel">
                    <p> <b> Cost:</b> $5–$10 per car </p>
                    <p> <b> Location:</b> 759 State Park Rd, Troutman, NC 28166 </p>
                    <p> Visit Lake Norman State Park and enjoy the lakefront beach area. While there’s a small parking fee, the beautiful water views and opportunity for a peaceful day by the lake make it worth it. </p>
                </div>
                <button class="accordion">Outdoor Movie Night at The Knight Theater</button>
                <div class="panel">
                    <p> <b> Cost:</b> $10–$20 per ticket </p>
                    <p> <b> Location:</b> 430 S Tryon St, Charlotte, NC 28202 </p>
                    <p> Check out outdoor movie events hosted at various locations around Charlotte, such as the Knight Theater or other outdoor venues. You can enjoy a movie under the stars at an affordable price. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'outdoor' && priceRange === '25-50') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Whitewater Rafting at the U.S. National Whitewater Center </button>
                <div class="panel">
                    <p><b> Cost:</b> $30–$50 for a single rafting session </p>
                    <p><b> Location:</b> 5000 Whitewater Center Pkwy, Charlotte, NC 28214 </p>
                    <p> Experience the thrill of whitewater rafting on man-made rapids at the U.S. National Whitewater Center. You can also enjoy other outdoor activities like zip-lining and rock climbing for additional fees. </p>
                </div>
                <button class="accordion">Bike Rental on the Little Sugar Creek Greenway </button>
                <div class="panel">
                    <p> <b> Cost:</b> $25–$40 per day </p>
                    <p> <b> Location:</b> 1133 Metropolitan Ave, Charlotte, NC 28204 </p>
                    <p> Rent a bike and explore the scenic Little Sugar Creek Greenway or other parts of Charlotte's bike trails. It's a great way to see the city and enjoy some exercise while outdoors. </p>
                </div>
                <button class="accordion"> Zip Lining at the U.S. National Whitewater Center </button>
                <div class="panel">
                    <p> <b> Cost:</b> $35–$50 </p>
                    <p> <b> Location:</b> 5000 Whitewater Center Pkwy, Charlotte, NC 28214 </p>
                    <p> Take to the skies and enjoy zip-lining through the trees at the U.S. National Whitewater Center. The center offers multiple outdoor adventure activities in addition to rafting. </p>
                </div>
                <button class="accordion">Stand-Up Paddleboarding at Lake Norman</button>
                <div class="panel">
                    <p> <b> Cost:</b> $30–$45 for a 1-hour rental </p>
                    <p> <b> Location:</b> 19900 West Catawba Ave, Suite 102 Cornelius, NC 28031 </p>
                    <p> Rent a paddleboard and enjoy the calm waters of Lake Norman. Paddleboarding is a relaxing and fun way to get out on the water and enjoy beautiful views. </p>
                </div>
                <button class="accordion">Fishing at Lake Wylie</button>
                <div class="panel">
                    <p> <b> Cost:</b> $25–$50 for a day pass or rental </p>
                    <p> <b> Location:</b> McDowell Park Dr, Charlotte, NC 28278 </p>
                    <p> Rent a boat or simply fish from the shore at Lake Wylie, a peaceful and scenic spot located just outside Charlotte. You can enjoy a day of fishing in a tranquil outdoor setting. </p>
                </div>
                <button class="accordion">Botanical Garden Tours at Daniel Stowe Botanical Garden</button>
                <div class="panel">
                    <p> <b> Cost:</b> $25–$35 per ticket </p>
                    <p> <b> Location:</b> 6500 South New Hope Rd Belmont, NC 28012 </p>
                    <p> Visit the beautiful Daniel Stowe Botanical Garden and enjoy a guided tour through lush gardens and outdoor exhibits. It’s a peaceful and scenic way to enjoy nature while learning about local flora. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'outdoor' && priceRange === '50-100') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Private Guided Hiking Tour at Crowders Mountain State Park </button>
                <div class="panel">
                    <p><b> Cost:</b> $50–$75 per person </p>
                    <p><b> Location:</b> 522 Park Office Ln, Kings Mountain, NC 28086 </p>
                    <p> Take a guided hiking tour through Crowders Mountain State Park, where you’ll enjoy stunning views of the Piedmont region. A knowledgeable guide can show you the best trails and hidden spots while providing insights into the local flora and fauna. </p>
                </div>
                <button class="accordion">Charlotte Segway Tours </button>
                <div class="panel">
                    <p> <b> Cost:</b> $60–$90 per person </p>
                    <p> <b> Location:</b>  7840 Lyles Ln NW, Concord, NC 28027 </p>
                    <p> Experience the thrill of skydiving indoors with a private session at iFly. You'll have a chance to fly in a vertical wind tunnel for a unique adrenaline rush. </p>
                </div>
            </div>
        `;
    } else if (type === 'explore' && environment === 'outdoor' && priceRange === '100+') {
        suggestions = `
                 <h3>Indoor Adventures ($0-25)</h3>
            <div class="accordion">
                <button class="accordion">Private Helicopter Tour of Charlotte </button>
                <div class="panel">
                    <p><b> Cost:</b> $150–$300+ </p>
                    <p><b> Location:</b> 1110 Baron Rd, Waxhaw, NC 28173 </p>
                    <p> Experience Charlotte from a bird’s-eye view with a private helicopter tour. See the city’s iconic skyline, the NASCAR Hall of Fame, and surrounding areas, all from the sky. Various tour packages are available, offering different lengths and views. </p>
                </div>
                <button class="accordion">Private Yacht Charter on Lake Norman </button>
                <div class="panel">
                    <p> <b> Cost:</b> $150–$400+ for a half-day rental </p>
                    <p> <b> Location:</b> 18020 Kings Point Dr, Cornelius, NC 28031 </p>
                    <p> Rent a private yacht for a luxurious day on Lake Norman. This experience offers the chance to relax, swim, and explore the beautiful lake with friends or family, complete with a captain and crew. </p>
                </div>
                <button class="accordion"> Golf at The Golf Club at Ballantyne </button>
                <div class="panel">
                    <p> <b> Cost:</b> $100–$200+ per round </p>
                    <p> <b> Location:</b> 11120 Ballantyne Crossing Ave, Charlotte, NC 28277 </p>
                    <p> Play a round of golf at the exclusive Golf Club at Ballantyne, an upscale course that offers both challenging gameplay and stunning views. Perfect for those looking for a premium golfing experience. </p>
                </div>
                <button class="accordion">Guided Fly Fishing Trip at the U.S. National Whitewater Center</button>
                <div class="panel">
                    <p> <b> Cost:</b> $125–$250+ </p>
                    <p> <b> Location:</b> 5000 Whitewater Center Pkwy, Charlotte, NC 28214 </p>
                    <p> Spend a day fly fishing with a professional guide at the U.S. National Whitewater Center. Learn the art of fly fishing while surrounded by the beautiful natural environment of the Catawba River. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'indoor' && priceRange === '0-25') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">The Dish</button>
                <div class="panel">
                    <p><b> Cost:</b>  $10–$20 per person </p>
                    <p><b> Location:</b> 1220 Thomas Ave, Charlotte, NC 28205 </p>
                    <p> A cozy and modern spot known for its Southern comfort food with a twist. The menu offers options like shrimp and grits, fried chicken, and fresh salads, making it a great place for an affordable and satisfying meal. </p>
                </div>
                <button class="accordion">Mellow Mushroom</button>
                <div class="panel">
                     <p> <b> Cost:</b> $10–$25 per person </p>
                    <p> <b> Location:</b>  Multiple Locations in Charlotte </p>
                    <p> A quirky and fun restaurant offering specialty pizzas, sandwiches, and salads in an eclectic indoor setting. The wide variety of pizza options makes it a great place for groups or anyone craving comfort food at an affordable price. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'indoor' && priceRange === '25-50') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">BrickTop's </button>
                <div class="panel">
                    <p><b> Cost:</b> $25–$45 per person </p>
                    <p><b> Location:</b> 6401 Carnegie Blvd #1B, Charlotte, NC 28211 </p>
                    <p> An American restaurant offering a variety of dishes like steak, seafood, and pasta in an elegant yet casual indoor setting. BrickTop's is known for its attentive service and flavorful dishes. </p>
                </div>
                <button class="accordion">Del Frisco's Double Eagle Steakhouse </button>
                <div class="panel">
                    <p> <b> Cost:</b>  $25–$45 per person </p>
                    <p> <b> Location:</b> 4725 Piedmont Row Dr Suite 170, Charlotte, NC 28210 </p>
                    <p> This upscale restaurant features a delicious mix of classic American fare and modern twists, including burgers, seafood, and steaks. With a sophisticated atmosphere, it offers an ideal spot for a casual yet elevated dining experience. </p>
                </div>
                <button class="accordion"> Luce </button>
                <div class="panel">
                    <p> <b> Cost:</b> $30–$50 per person </p>
                    <p> <b> Location:</b> 214 N Tryon St J, Charlotte, NC 28202 </p>
                    <p> A contemporary Italian restaurant that serves hand-crafted pastas, wood-fired pizzas, and fresh seafood in a stylish indoor setting. It's perfect for those craving authentic Italian cuisine in a cozy, modern atmosphere. </p>
                </div>
                <button class="accordion">Sullivan’s Steakhouse</button>
                <div class="panel">
                    <p> <b> Cost:</b> $35–$50 per person </p>
                    <p> <b> Location:</b> 1928 South Blvd #200, Charlotte, NC 28203 </p>
                    <p> A premium steakhouse known for its top-quality steaks, seafood, and classic American sides. Sullivan’s offers a classy indoor setting, ideal for steak lovers or those looking for an elegant dining experience. </p>
                </div>
            <button class="accordion">Sea Level NC</button>
                <div class="panel">
                    <p> <b> Cost:</b> $25–$50 per person </p>
                    <p> <b> Location:</b> 129 E 5th St, Charlotte, NC 28202 </p>
                    <p> This seafood-centric restaurant offers a modern, coastal dining experience, with fresh oysters, fish tacos, and shrimp dishes. The elegant indoor setting is perfect for seafood lovers seeking a refined yet casual atmosphere. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'indoor' && priceRange === '50-100') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">Chima Brazilian Steakhouse </button>
                <div class="panel">
                    <p><b> Cost:</b> $50–$75 per person </p>
                    <p><b> Location:</b> 139 S Tryon St, Charlotte, NC 28202 </p>
                    <p> This Brazilian churrascaria offers an all-you-can-eat feast of rotisserie-grilled meats served tableside, alongside a gourmet salad bar. The vibrant indoor atmosphere and plentiful selection of meats provide a fun and filling dining experience. </p>
                </div>
                <button class="accordion">Basil Thai Cuisine - Charlotte </button>
                <div class="panel">
                    <p> <b> Cost:</b> $50–$70 per person </p>
                    <p> <b> Location:</b> 210 N Church St, Charlotte, NC 28202 </p>
                    <p> For those craving authentic Thai cuisine, Basil Thai offers an upscale yet cozy indoor setting with a variety of flavorful dishes, including curries, pad Thai, and fresh seafood options, made with high-quality ingredients. </p>
                </div>
                <button class="accordion"> Caroline’s Oyster Bar </button>
                <div class="panel">
                    <p> <b> Cost:</b> $50–$90 per person </p>
                    <p> <b> Location:</b> 120 E Brooklyn Vlg Ave, Charlotte, NC 28202 </p>
                    <p> Known for its fresh oysters, seafood, and upscale coastal cuisine, The Oyster Bar offers a refined yet relaxed indoor dining experience. With a focus on quality ingredients and a diverse seafood menu, it’s perfect for seafood lovers looking for a special meal. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'indoor' && priceRange === '100+') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">The Capital Grille (Upscale Experience) </button>
                <div class="panel">
                    <p><b> Cost:</b> $100–$150+ per person </p>
                    <p><b> Location:</b> 201 N Tryon St, Charlotte, NC 28202 </p>
                    <p> While it falls within lower price ranges as well, for those looking for a more lavish experience, The Capital Grille offers an exclusive dining atmosphere with prime cuts of steak, lobster tails, and a fine selection of wines. It's perfect for celebrating milestones. </p>
                </div>
                <button class="accordion">Ruth's Chris Steak House </button>
                <div class="panel">
                    <p> <b> Cost:</b> $100–$200+ per person </p>
                    <p> <b> Location:</b> 6000 Fairview Rd, Charlotte, NC 28210 </p>
                    <p> Known for its signature sizzling steaks and upscale ambiance, Ruth's Chris Steak House offers a high-end dining experience with a menu that includes USDA Prime steaks, lobster, and decadent sides. Perfect for those looking for a luxurious steakhouse experience. </p>
                </div>
                <button class="accordion"> Paco's Tacos & Tequila </button>
                <div class="panel">
                    <p> <b> Cost:</b> $100–$150+ per person (for premium options and large group orders) </p>
                    <p> <b> Location:</b> 6401 Carnegie Blvd #8a, Charlotte, NC 28211 </p>
                    <p> While Paco's offers a casual vibe, its upscale taco and tequila offerings make it possible to indulge in a more lavish experience, especially with top-shelf tequilas, premium margaritas, and specialty taco plates, perfect for a festive celebration or group dinner. </p>
                </div>
                <button class="accordion">McNinch House Restaurant</button>
                <div class="panel">
                    <p> <b> Cost:</b> $100–$150+ per person </p>
                    <p> <b> Location:</b> 511 N Church St, Charlotte, NC 28202 </p>
                    <p> Located in a historic house, McNinch House offers a refined fine dining experience with a seasonal, prix-fixe menu that highlights gourmet American cuisine. It's an intimate and luxurious setting, perfect for a romantic dinner or special celebration. </p>
                </div>
                <button class="accordion">Steak 48</button>
                <div class="panel">
                    <p> <b> Cost:</b> $100–$200+ per person </p>
                    <p> <b> Location:</b> 4425 Sharon Rd, Charlotte, NC 28211 </p>
                    <p> This upscale steakhouse offers prime cuts of beef, fresh seafood, and an extensive wine list in an elegant setting. Steak 48's sophisticated indoor dining space and exceptional service make it an excellent choice for high-end dining experiences. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'outdoor' && priceRange === '0-25') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">The Yard Milkshake Bar </button>
                <div class="panel">
                    <p><b> Cost:</b> $5–$15 per person </p>
                    <p><b> Location:</b> 1942 E 7th St #102, Charlotte, NC 28204 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Known for its creative and indulgent milkshakes topped with a variety of treats, The Yard also serves light bites like fries and sandwiches. With both indoor and outdoor seating, it’s a fun spot for a casual, sweet treat or a snack. </p>
                </div>
                <button class="accordion">Bobby's Burgers by Bobby Flay </button>
                <div class="panel">
                    <p><b> Cost:</b>  $10–$20 per person </p>
                    <p><b> Location:</b> 6100 Fairview Rd #100, Charlotte, NC 28210 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A retro-style diner offering delicious burgers, fries, and shakes. With indoor seating and a few outdoor tables, it’s a great spot for enjoying classic American comfort food on a budget. </p>
                </div>
                <button class="accordion">Pinky's Westside Grill </button>
                <div class="panel">
                    <p><b> Cost:</b> $10–$20 per person </p>
                    <p><b> Location:</b> 1600 W Morehead St, Charlotte, NC 28208 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A popular casual spot known for creative burgers, sandwiches, and comfort food with a twist. With a laid-back atmosphere and an outdoor patio, Pinky’s is perfect for enjoying affordable meals in the fresh air. </p>
                </div>
                <button class="accordion">The Common Market Southend </button>
                <div class="panel">
                    <p><b> Cost:</b> $10–$20 per person </p>
                    <p><b> Location:</b> 235 W Tremont Ave, Charlotte, NC 28203 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> This quirky café and market offers sandwiches, salads, and hearty sides in a relaxed environment. It has a cozy indoor setting and a small outdoor patio, great for enjoying a casual meal or grabbing a quick bite. </p>
                </div>
                <button class="accordion">Sabor Latin Street Grill </button>
                <div class="panel">
                    <p><b> Cost:</b> $5–$20 per person </p>
                    <p><b> Location:</b> Multiple locations around Charlotte </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Offering flavorful Latin street food like tacos, burritos, and quesadillas, Sabor provides a vibrant indoor atmosphere and a small outdoor seating area where you can enjoy tasty dishes at affordable prices. </p>
                </div>
                <button class="accordion">Amélie's French Bakery & Café </button>
                <div class="panel">
                    <p><b> Cost:</b> $5–$20 per person </p>
                    <p><b> Location:</b> 380 S College St, Charlotte, NC 28202, 136 E 36th St, Charlotte, NC 28205 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A charming French café known for its pastries, sandwiches, and soups. While it primarily offers indoor seating, many locations also have outdoor seating options, perfect for enjoying a light meal or a coffee on a sunny day. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'outdoor' && priceRange === '25-50') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">The Flying Biscuit Café </button>
                <div class="panel">
                    <p><b> Cost:</b> $20–$40 per person </p>
                    <p><b> Location:</b> 4241 Park Rd, Charlotte, NC 28209 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Famous for its Southern-style breakfast and brunch options, The Flying Biscuit Café serves delicious dishes like shrimp and grits, biscuits and gravy, and fresh salads. The cozy indoor atmosphere and outdoor seating area provide a great setting for a relaxing meal. </p>
                </div>
                <button class="accordion">Bad Daddy's Burger Bar </button>
                <div class="panel">
                    <p><b> Cost:</b>  $20–$35 per person </p>
                    <p><b> Location:</b> Multiple locations around Charlotte </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A fun, laid-back spot specializing in gourmet burgers, sandwiches, and salads. With both indoor and outdoor seating options, Bad Daddy's is a great place to enjoy a hearty burger in a lively atmosphere. </p>
                </div>
                <button class="accordion">Suffolk Punch Brewing South End </button>
                <div class="panel">
                    <p><b> Cost:</b> $25–$45 per person </p>
                    <p><b> Location:</b> 2911 Griffith St, Charlotte, NC 28203 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> SouthEnd Brewery offers craft beers, barbecue, and Southern comfort food in a relaxed environment. The indoor seating is cozy, and the outdoor patio is ideal for enjoying a meal with friends while sipping on locally brewed beers. </p>
                </div>
                <button class="accordion">Tupelo Honey </button>
                <div class="panel">
                    <p><b> Cost:</b> $25–$45 per person </p>
                    <p><b> Location:</b> 101 S Tryon St Suite 130, Charlotte, NC 28280 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> This Southern-inspired restaurant serves comfort food classics like chicken and waffles, buttermilk biscuits, and fried green tomatoes. Tupelo Honey offers both indoor seating with a charming, rustic decor and a spacious outdoor patio. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'outdoor' && priceRange === '50-100') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">The Porter’s House </button>
                <div class="panel">
                    <p><b> Cost:</b> $50–$85 per person </p>
                    <p><b> Location:</b> 7417 Waverly Walk Ave, Charlotte, NC 28277 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Known for its prime steaks and high-end dishes, The Porter’s House offers a luxurious dining experience. With both indoor seating in a refined atmosphere and outdoor patio seating, it's ideal for enjoying top-quality meats and craft cocktails. </p>
                </div>
                <button class="accordion">Stagioni </button>
                <div class="panel">
                    <p><b> Cost:</b>  $50–$75 per person </p>
                    <p><b> Location:</b> 715 Providence Rd, Charlotte, NC 28207 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> This Italian restaurant is celebrated for its seasonal menu with handmade pasta, classic Italian dishes, and an impressive wine selection. With cozy indoor seating and a charming outdoor patio, Stagioni is perfect for a romantic dinner or special occasion. </p>
                </div>
                <button class="accordion">Noble Smoke </button>
                <div class="panel">
                    <p><b> Cost:</b> $50–$80 per person </p>
                    <p><b> Location:</b> 1600 W Morehead St, Charlotte, NC 28208 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A modern barbecue spot known for its upscale take on Southern BBQ. Noble Smoke serves smoked meats like brisket, pork, and ribs, paired with Southern sides. The restaurant offers a comfortable indoor space and an outdoor patio perfect for enjoying a hearty meal. </p>
                </div>
                <button class="accordion">Rooster’s Wood-Fired Kitchen </button>
                <div class="panel">
                    <p><b> Cost:</b> $50–$85 per person </p>
                    <p><b> Location:</b> 150 N College St, Charlotte, NC 28202, 6601 Carnegie Blvd, Charlotte, NC 28211 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Rooster’s serves delicious wood-fired dishes with a focus on seasonal ingredients. Offering a combination of Southern classics and creative dishes, the restaurant provides both indoor seating in a rustic, cozy atmosphere and outdoor seating for a more casual, open-air experience. </p>
                </div>
                <button class="accordion">The Pump House </button>
                <div class="panel">
                    <p><b> Cost:</b> $50–$90 per person </p>
                    <p><b> Location:</b> 575 Herrons Ferry Road, Rock Hill, SC 29730 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Located on the Catawba River, The Pump House offers a unique dining experience with a menu featuring fresh seafood, steaks, and Southern-inspired dishes. It boasts both elegant indoor seating and a scenic outdoor patio with river views. </p>
                </div>
            </div>
        `;
    } else if (type === 'indulge' && environment === 'outdoor' && priceRange === '100+') {
        suggestions = `
            <h3>Indoor Dining ($50-100)</h3>
            <div class="accordion">
                <button class="accordion">Boudreaux’s Louisiana Kitchen </button>
                <div class="panel">
                    <p><b> Cost:</b> $100+ per person </p>
                    <p><b> Location:</b> 501 E 36th St, Charlotte, NC 28205 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Known for its upscale take on Southern and Creole cuisine, Boudreaux's offers a memorable dining experience with dishes like crawfish etouffee, jambalaya, and fresh seafood. The restaurant provides both an elegant indoor dining area and a lovely outdoor seating space for a more relaxed atmosphere. </p>
                </div>
                <button class="accordion">Fahrenheit </button>
                <div class="panel">
                    <p><b> Cost:</b>  $100+ per person </p>
                    <p><b> Location:</b> 222 S Caldwell St 21st Floor, Charlotte, NC 28202 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> Located on the rooftop of the SKYE Condominiums, Fahrenheit offers sweeping views of Charlotte’s skyline alongside a menu of innovative American cuisine. Whether you dine indoors with modern decor or enjoy the outdoor patio with panoramic views, it’s perfect for a special occasion. </p>
                </div>
                <button class="accordion">Cowfish Sushi Burger Bar </button>
                <div class="panel">
                    <p><b> Cost:</b> $100+ per person </p>
                    <p><b> Location:</b> 4310 Sharon Rd, Charlotte, NC 28211 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A trendy spot offering a unique combination of sushi and gourmet burgers, Cowfish serves creative dishes in a fun, upscale environment. The indoor seating is stylish, and there’s also a large outdoor patio to enjoy your meal in an open-air atmosphere. </p>
                </div>
                <button class="accordion">O-Ku Sushi </button>
                <div class="panel">
                    <p><b> Cost:</b> $100+ per person </p>
                    <p><b> Location:</b> 2000 South Blvd, Charlotte, NC 28203 </p>
                    <p><b> Seating :</b> Both indoor and outdoor
                    <p> A high-end sushi restaurant offering a sophisticated take on Japanese cuisine with fresh, sustainable fish and an elegant atmosphere. The stylish indoor seating is complemented by a chic outdoor patio, ideal for sushi enthusiasts looking for a luxurious experience. </p>
                </div>
            </div>
        `;
    }

    // Insert suggestions and activate accordion functionality
    resultDiv.innerHTML = suggestions;
    setupAccordion();
}

function setupAccordion() {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 1; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.opacity = 0;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.opacity = 1;
            }
        });
    }
}
