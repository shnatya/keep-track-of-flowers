

puts "Seeding users ..."
User.create(username: "John", password: "testtest")
User.create(username: "Mary", password: "testtest")
puts "✅ Done seeding users!"


puts "Seeding flowers ..."
Flower.create(name: "Fabio", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Red and yellow", height: "16 inches", description: "Fringed tulips", user_id: 1, image_url: "https://www.tulips.com/images/popup/fabio-fringed-tulips.jpg")
Flower.create(name: "Armeniacum", type_species: "Muscari", season: "Spring", subseason: "Early", color: "Blue", height: "6 to 9 inches", description: "Mimic grapes. Fragrant.", user_id: 1, image_url: "https://www.tulips.com/images/popup/Muscari-Armeniacum.jpg")
Flower.create(name: "Columbus", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Pinkish red with cream edge", height: "18 inches and up", description: "Double tulip", user_id: 1, image_url: "https://www.tulips.com/images/popup/columbus-double-tulip.jpg")
Flower.create(name: "Yellow crocus", type_species: "Crocuses", season: "Spring", subseason: "Early", color: "Yellow", height: "4 to 6 inches", description: "Multiply very quickly", user_id: 2, image_url: "https://www.tulips.com/images/popup/Yellow-Crocus.jpg")
Flower.create(name: "Joan of Arc", type_species: "Crocuses", season: "Spring", subseason: "Early", color: "White", height: "4 to 6 inches", description: "Multiply very quickly", user_id: 2, image_url: "https://www.tulips.com/images/popup/Joan-of-Arc.jpg")
puts "✅ Done seeding flowers!"

puts "Seeding locations ..."
Location.create(name: "Planter", description: "Maple rectangular planter", image_url: "https://drive.google.com/uc?export=view&id=13K9bEeUl7kzW3xUONIDElUvi3MU9-p13")
Location.create(name: "Pot", description: "Round grey conoid pot", image_url: "https://drive.google.com/uc?export=view&id=1nTPCspG_cBoYdaZ81DzcY3zXk42jI-p0")
Location.create(name: "Basket", description: "Basket", image_url: "https://drive.google.com/uc?export=view&id=1jnxh2hS4dt7CUQSCi6MPv8XpNZUz4Pzd")
Location.create(name: "Ground", description: "In the ground under bluberry, against the garage", image_url: "https://drive.google.com/uc?export=view&id=1UZENKkwkSjt7WDLhJqKSRaKqwepm6b_6")
Location.create(name: "Pot", description: "Yellow small pot", image_url: "https://drive.google.com/uc?export=view&id=1WknC9REFVPot0CX8haNp06L9efqgB4Cw")
Location.create(name: "Pot", description: "Clay strawberry pot with side openings", image_url: "https://drive.google.com/uc?export=view&id=1rp2Cfacm18r_EpPEVH69pICs3yix-NB5")
Location.create(name: "Ground", description: "In the ground between the bench and peach tree, by the fence", image_url: "https://drive.google.com/uc?export=view&id=1_6JD5WBtlQ6Uy9Ku9HX_SHZBZR8-aa6M")
Location.create(name: "Ground", description: "In the ground around the fountain", image_url: "https://drive.google.com/uc?export=view&id=1-p0fTeysMEN4ZjsanKiW7F1ISmHxsiwM")
Location.create(name: "Ground", description: "In the ground by the fence with the bell", image_url: "https://drive.google.com/uc?export=view&id=1Odl9PjSTJ4_6k9aVbtEoO34g2yCDFS2z")
Location.create(name: "Ground", description: "In the ground by the arch on the side yard", image_url: "https://drive.google.com/uc?export=view&id=1MaTLcCe8yRSR-iBnZdgO0frOZM0JLkj9")
Location.create(name: "Ground", description: "On the left from the steps by the garage", image_url: "https://drive.google.com/uc?export=view&id=1WTiEar56pPgcqAOZAbrndM-CHWehAXVZ")
Location.create(name: "Ground", description: "On the right from the steps by the garage", image_url: "https://drive.google.com/uc?export=view&id=1355aV-XB2HsugTlWbecvB4SzZdpMIzaA")
Location.create(name: "Pot", description: "Tall pot on the porch", image_url: "https://drive.google.com/uc?export=view&id=1vUYoVAXL6KBsRuDCDzUmoDiqjJMt5rSt")
#Location.create(name: "Pot", description: "Tall pot on the porch", image_url: "https://drive.google.com/uc?export=view&id=1vUYoVAXL6KBsRuDCDzUmoDiqjJMt5rSt")
Location.create(name: "Pot", description: "Black medium pot", image_url: "https://drive.google.com/uc?export=view&id=1va7O6DZOIMe5M0mdyyb0bfT_xPLpcyHC")
Location.create(name: "Ground", description: "Under the raspberry", image_url: "https://drive.google.com/uc?export=view&id=1INsn5xogtVDra0kMwJs9IjAMUo2iFhF7")
Location.create(name: "Ground", description: "In the corner of side yard, under the porch", image_url: "https://drive.google.com/uc?export=view&id=1W_RQW54paSSWbi4XbI4Bq_OHEgHKtyn1")



puts "✅ Done seeding locations!"


puts "Seeding planting operations ..."
PlantingOperation.create(flower_id: 1, location_id: 4 )
PlantingOperation.create(flower_id: 1, location_id: 5 )
PlantingOperation.create(flower_id: 2, location_id: 7)
PlantingOperation.create(flower_id: 2, location_id: 6)
PlantingOperation.create(flower_id: 2, location_id: 4)
PlantingOperation.create(flower_id: 3, location_id: 1)
PlantingOperation.create(flower_id: 3, location_id: 8)
PlantingOperation.create(flower_id: 4, location_id: 2)
PlantingOperation.create(flower_id: 4, location_id: 3)
PlantingOperation.create(flower_id: 5, location_id: 7)
puts "✅ Done seeding planting operations!"


