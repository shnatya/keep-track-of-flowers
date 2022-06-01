

puts "Seeding users ..."
User.create(username: "John", password: "test")
User.create(username: "Mary", password: "test")
puts "✅ Done seeding users!"


puts "Seeding flowers ..."
Flower.create(name: "Fabio", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Red and yellow", height: "16 inches", description: "Fringed tulips", user_id: 1, image_url: "https://www.tulips.com/images/popup/fabio-fringed-tulips.jpg")
Flower.create(name: "Armeniacum", type_species: "Muscari", season: "Spring", subseason: "Early", color: "Blue", height: "6 to 9 inches", description: "Mimic grapes. Fragrant.", user_id: 1, image_url: "https://www.tulips.com/images/popup/Muscari-Armeniacum.jpg")
Flower.create(name: "Columbus", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Pinkish red with cream edge", height: "18 inches and up", description: "Double tulip", user_id: 1, image_url: "https://www.tulips.com/images/popup/columbus-double-tulip.jpg")
Flower.create(name: "Yellow Crocus", type_species: "Crocuses", season: "Spring", subseason: "Early", color: "Yellow", height: "4 to 6 inches", description: "Multiply very quickly", user_id: 2, image_url: "https://www.tulips.com/images/popup/Yellow-Crocus.jpg")
Flower.create(name: "Joan of Arc", type_species: "Crocuses", season: "Spring", subseason: "Early", color: "White", height: "4 to 6 inches", description: "Multiply very quickly", user_id: 2, image_url: "https://www.tulips.com/images/popup/Joan-of-Arc.jpg")
Flower.create(name: "Ivanetti", type_species: "Dahlias", season: "Summer", subseason: "Mid", color: "Pink", height: "3 feet", description: "", user_id: 2, image_url: "https://drive.google.com/uc?export=view&id=1F_GKblrC2W1tMnZjjnXQKR_Xy1EdFDf9")
Flower.create(name: "Orange Princess", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Orange", height: "16 to 18 inches", description: "A normal tulip has six petals while a Double tulip has at least twice that amount!", user_id: 1, image_url: "https://s3.amazonaws.com/cdn.tulips.com/images/large/Orange-Princess-2017.jpg")
Flower.create(name: "Fruit Punch", type_species: "Oriental Poppies", season: "Spring", subseason: "Late", color: "Orange", height: "2 feet", description: "", user_id: 1, image_url: "https://drive.google.com/uc?export=view&id=1tKf0AfUSuL57MjKD1CFOzK7XMJ8U4nlt")
Flower.create(name: "Dwarf Yellow Lilium", type_species: "Asiatic Lily", season: "Summer", subseason: "Early", color: "Yellow", height: "12 to 18 inches", description: "", user_id: 1, image_url: "https://drive.google.com/uc?export=view&id=10FT6e_2XlI0IFUwX-cb9upxzQVxFLNCR")


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
Location.create(name: "Flowerbed", description: "Flowerbed on the side yard", image_url: "https://drive.google.com/uc?export=view&id=1HGbb87eEOR42_TAfJKvR--NxCVDYU3Cb")
Location.create(name: "Pot", description: "Black medium pot", image_url: "https://drive.google.com/uc?export=view&id=1va7O6DZOIMe5M0mdyyb0bfT_xPLpcyHC")
Location.create(name: "Ground", description: "Under the raspberry", image_url: "https://drive.google.com/uc?export=view&id=1INsn5xogtVDra0kMwJs9IjAMUo2iFhF7")
Location.create(name: "Ground", description: "In the corner of side yard, under the porch", image_url: "https://drive.google.com/uc?export=view&id=1W_RQW54paSSWbi4XbI4Bq_OHEgHKtyn1")
Location.create(name: "Pot", description: "Green triangle pot", image_url: "https://drive.google.com/uc?export=view&id=1sEzKHaHsegYaD44ChUEamWztfa1zBcTp")
Location.create(name: "Pot", description: "Brownish pot", image_url: "https://drive.google.com/uc?export=view&id=1srXUYYS1qdwOlAr8kDMtKyonjzC8gZk6")
Location.create(name: "Pot", description: "Wooden triangle pot", image_url: "https://drive.google.com/uc?export=view&id=17RUYvSAHmMhKaHXXM2rVKXBI5HevITAM")
Location.create(name: "Pot", description: "Black pot", image_url: "https://drive.google.com/uc?export=view&id=10brDv2ClksKcUCCtXsU-6P44rsXBByZ8")



puts "✅ Done seeding locations!"


puts "Seeding planting operations ..."
PlantingOperation.create(flower_id: 1, location_id: 4 )
PlantingOperation.create(flower_id: 1, location_id: 14 )
PlantingOperation.create(flower_id: 2, location_id: 12)
PlantingOperation.create(flower_id: 2, location_id: 10)
PlantingOperation.create(flower_id: 2, location_id: 7)
PlantingOperation.create(flower_id: 2, location_id: 6)
PlantingOperation.create(flower_id: 2, location_id: 5)
PlantingOperation.create(flower_id: 2, location_id: 4)
PlantingOperation.create(flower_id: 3, location_id: 1)
PlantingOperation.create(flower_id: 3, location_id: 7)
PlantingOperation.create(flower_id: 4, location_id: 2)
PlantingOperation.create(flower_id: 4, location_id: 3)
PlantingOperation.create(flower_id: 5, location_id: 6)

PlantingOperation.create(flower_id: 6, location_id: 19)
PlantingOperation.create(flower_id: 6, location_id: 20)
PlantingOperation.create(flower_id: 6, location_id: 21)
PlantingOperation.create(flower_id: 7, location_id: 18)
PlantingOperation.create(flower_id: 7, location_id: 14)

puts "✅ Done seeding planting operations!"


