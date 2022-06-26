

puts "Seeding users ..."
u1 = User.create(username: "Nastya", password: "test")
u2 = User.create(username: "Mary", password: "test")
puts "✅ Done seeding users!"


puts "Seeding flowers ..."
f1 = Flower.create(name: "Fabio", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Red and yellow", height: "16 inches", description: "Fringed tulips", user_id: u1.id, image_url: "https://www.tulips.com/images/popup/fabio-fringed-tulips.jpg")
f2 = Flower.create(name: "Armeniacum", type_species: "Muscari", season: "Spring", subseason: "Early", color: "Blue", height: "6 to 9 inches", description: "Mimic grapes. Fragrant.", user_id: u1.id, image_url: "https://www.tulips.com/images/popup/Muscari-Armeniacum.jpg")
f3 = Flower.create(name: "Columbus", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Pinkish red with cream edge", height: "18 inches and up", description: "Double tulip", user_id: u1.id, image_url: "https://www.tulips.com/images/popup/columbus-double-tulip.jpg")
f4 = Flower.create(name: "Yellow Crocus", type_species: "Crocuses", season: "Spring", subseason: "Early", color: "Yellow", height: "4 to 6 inches", description: "Multiply very quickly", user_id: u2.id, image_url: "https://www.tulips.com/images/popup/Yellow-Crocus.jpg")
f5 = Flower.create(name: "Joan of Arc", type_species: "Crocuses", season: "Spring", subseason: "Early", color: "White", height: "4 to 6 inches", description: "Multiply very quickly", user_id: u2.id, image_url: "https://www.tulips.com/images/popup/Joan-of-Arc.jpg")
f6 = Flower.create(name: "Ivanetti", type_species: "Dahlias", season: "Summer", subseason: "Mid", color: "Pink", height: "3 feet", description: "Cute small balls", user_id: u2.id, image_url: "https://drive.google.com/uc?export=view&id=1F_GKblrC2W1tMnZjjnXQKR_Xy1EdFDf9")
f7 = Flower.create(name: "Orange Princess", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Orange", height: "16 to 18 inches", description: "A normal tulip has six petals while a Double tulip has at least twice that amount!", user_id: u1.id, image_url: "https://s3.amazonaws.com/cdn.tulips.com/images/large/Orange-Princess-2017.jpg")
f8 = Flower.create(name: "Fruit Punch", type_species: "Oriental Poppies", season: "Spring", subseason: "Late", color: "Orange", height: "2 feet", description: "Huge flowers, long lasting", user_id: u1.id, image_url: "https://drive.google.com/uc?export=view&id=1tKf0AfUSuL57MjKD1CFOzK7XMJ8U4nlt")
f9 = Flower.create(name: "Dwarf Yellow Lilium", type_species: "Asiatic Lilies", season: "Summer", subseason: "Early", color: "Yellow", height: "12 to 18 inches", description: "Bright flowers", user_id: u1.id, image_url: "https://drive.google.com/uc?export=view&id=10FT6e_2XlI0IFUwX-cb9upxzQVxFLNCR")
f10 = Flower.create(name: "Giant Sunrise", type_species: "Tulips", season: "Spring", subseason: "Early", color: "Orange sunrise", height: "16 inches", description: "Giant flowers and patterned leaves", user_id: u1.id, image_url: "https://www.tulips.com/images/popup/Giant_Orange_Sunset.jpg")
f11 = Flower.create(name: "Pink Sensation", type_species: "Hyacinths", season: "Spring", subseason: "Early", color: "Pink", height: "6 to 8 inches", description: "Beautiful colored flowers complimented by a sweetly smelling scent.", user_id: u1.id, image_url: "https://www.tulips.com/images/popup/Ana-Lisa.jpg")

puts "✅ Done seeding flowers!"

puts "Seeding locations ..."
l1 = Location.create(name: "Planter", description: "Maple rectangular planter", image_url: "https://drive.google.com/uc?export=view&id=13K9bEeUl7kzW3xUONIDElUvi3MU9-p13", user_id: u1.id)
l2 = Location.create(name: "Pot", description: "Round grey conoid pot", image_url: "https://drive.google.com/uc?export=view&id=1nTPCspG_cBoYdaZ81DzcY3zXk42jI-p0", user_id: u1.id)
l3 = Location.create(name: "Basket", description: "Basket", image_url: "https://drive.google.com/uc?export=view&id=1jnxh2hS4dt7CUQSCi6MPv8XpNZUz4Pzd", user_id: u1.id)
l4 = Location.create(name: "Ground", description: "The ground under bluberry, against the garage", image_url: "https://drive.google.com/uc?export=view&id=1UZENKkwkSjt7WDLhJqKSRaKqwepm6b_6", user_id: u1.id)
l5 = Location.create(name: "Pot", description: "Yellow small pot", image_url: "https://drive.google.com/uc?export=view&id=1WknC9REFVPot0CX8haNp06L9efqgB4Cw", user_id: u1.id)
l6 = Location.create(name: "Pot", description: "Clay strawberry pot with side openings", image_url: "https://drive.google.com/uc?export=view&id=1rp2Cfacm18r_EpPEVH69pICs3yix-NB5", user_id: u1.id)
l7 = Location.create(name: "Ground", description: "The ground between the bench and peach tree, by the fence", image_url: "https://drive.google.com/uc?export=view&id=1_6JD5WBtlQ6Uy9Ku9HX_SHZBZR8-aa6M", user_id: u1.id)
l8 = Location.create(name: "Ground", description: "The ground around the fountain", image_url: "https://drive.google.com/uc?export=view&id=1-p0fTeysMEN4ZjsanKiW7F1ISmHxsiwM", user_id: u1.id)
l9 = Location.create(name: "Ground", description: "The ground by the fence with the bell", image_url: "https://drive.google.com/uc?export=view&id=1Odl9PjSTJ4_6k9aVbtEoO34g2yCDFS2z", user_id: u1.id)
l10 = Location.create(name: "Ground", description: "The ground by the arch on the side yard", image_url: "https://drive.google.com/uc?export=view&id=1MaTLcCe8yRSR-iBnZdgO0frOZM0JLkj9", user_id: u1.id)
l11 = Location.create(name: "Ground", description: "The ground on the left from the steps by the garage", image_url: "https://drive.google.com/uc?export=view&id=1WTiEar56pPgcqAOZAbrndM-CHWehAXVZ", user_id: u1.id)
l12 = Location.create(name: "Ground", description: "The ground on the right from the steps by the garage", image_url: "https://drive.google.com/uc?export=view&id=1355aV-XB2HsugTlWbecvB4SzZdpMIzaA", user_id: u1.id)
l13 = Location.create(name: "Pot", description: "Tall pot on the porch", image_url: "https://drive.google.com/uc?export=view&id=1vUYoVAXL6KBsRuDCDzUmoDiqjJMt5rSt", user_id: u1.id)
l14 = Location.create(name: "Flowerbed", description: "Flowerbed on the side yard", image_url: "https://drive.google.com/uc?export=view&id=1HGbb87eEOR42_TAfJKvR--NxCVDYU3Cb", user_id: u1.id)
l15 = Location.create(name: "Pot", description: "Black medium pot", image_url: "https://drive.google.com/uc?export=view&id=1va7O6DZOIMe5M0mdyyb0bfT_xPLpcyHC", user_id: u1.id)
l16 = Location.create(name: "Ground", description: "The ground under the raspberry", image_url: "https://drive.google.com/uc?export=view&id=1INsn5xogtVDra0kMwJs9IjAMUo2iFhF7", user_id: u1.id)
l17 = Location.create(name: "Ground", description: "The ground at the corner of side yard, under the porch", image_url: "https://drive.google.com/uc?export=view&id=1W_RQW54paSSWbi4XbI4Bq_OHEgHKtyn1", user_id: u1.id)
l18 = Location.create(name: "Pot", description: "Green triangle pot", image_url: "https://drive.google.com/uc?export=view&id=1sEzKHaHsegYaD44ChUEamWztfa1zBcTp", user_id: u1.id)
l19 = Location.create(name: "Pot", description: "Brownish pot", image_url: "https://drive.google.com/uc?export=view&id=1srXUYYS1qdwOlAr8kDMtKyonjzC8gZk6", user_id: u1.id)
l20 = Location.create(name: "Pot", description: "Wooden triangle pot", image_url: "https://drive.google.com/uc?export=view&id=17RUYvSAHmMhKaHXXM2rVKXBI5HevITAM", user_id: u1.id)
l21 = Location.create(name: "Pot", description: "Black pot", image_url: "https://drive.google.com/uc?export=view&id=10brDv2ClksKcUCCtXsU-6P44rsXBByZ8", user_id: u1.id)
l21 = Location.create(name: "Pot", description: "Shiny white pot", image_url: "https://drive.google.com/uc?export=view&id=1VvoG3QSo0NTTUrj8r23__d0C-f_xNc1S", user_id: u1.id)
l21 = Location.create(name: "Basket", description: "Small basket from Ross", image_url: "https://drive.google.com/uc?export=view&id=1A5hw_OZ9u7CUxOwXN20LsRlS89Bronjs", user_id: u2.id)

puts "✅ Done seeding locations!"


puts "Seeding planting operations ..."
PlantingOperation.create(flower_id: f1.id, location_id: l4.id, user_id: u1.id )
PlantingOperation.create(flower_id: f1.id, location_id: l14.id, user_id: u1.id )
PlantingOperation.create(flower_id: f2.id, location_id: l12.id, user_id: u1.id)
PlantingOperation.create(flower_id: f2.id, location_id: l10.id, user_id: u1.id)
PlantingOperation.create(flower_id: f2.id, location_id: l7.id, user_id: u1.id)
PlantingOperation.create(flower_id: f2.id, location_id: l6.id, user_id: u1.id)
PlantingOperation.create(flower_id: f2.id, location_id: l5.id, user_id: u1.id)
PlantingOperation.create(flower_id: f2.id, location_id: l4.id, user_id: u1.id)
PlantingOperation.create(flower_id: f3.id, location_id: l1.id, user_id: u1.id)
PlantingOperation.create(flower_id: f3.id, location_id: l7.id, user_id: u1.id)
PlantingOperation.create(flower_id: f4.id, location_id: l2.id, user_id: u1.id)
PlantingOperation.create(flower_id: f4.id, location_id: l3.id, user_id: u1.id)
PlantingOperation.create(flower_id: f5.id, location_id: l6.id, user_id: u1.id)
PlantingOperation.create(flower_id: f6.id, location_id: l19.id, user_id: u1.id)
PlantingOperation.create(flower_id: f6.id, location_id: l20.id, user_id: u1.id)
PlantingOperation.create(flower_id: f6.id, location_id: l21.id, user_id: u1.id)
PlantingOperation.create(flower_id: f7.id, location_id: l18.id, user_id: u1.id)
PlantingOperation.create(flower_id: f7.id, location_id: l14.id, user_id: u1.id)
PlantingOperation.create(flower_id: f10.id, location_id: l21.id, user_id: u1.id)
PlantingOperation.create(flower_id: f11.id, location_id: l21.id, user_id: u1.id)

puts "✅ Done seeding planting operations!"


