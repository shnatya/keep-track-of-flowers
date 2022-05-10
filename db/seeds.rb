

puts "Seeding users ..."
User.create(username: "John", password: "testtest")
User.create(username: "Mary", password: "testtest")
puts "✅ Done seeding users!"


puts "Seeding flowers ..."
Flower.create(name: "Fabio", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Red and yellow", height: "16 inches", description: "Fringed tulips", user_id: 1, image_url: "https://www.tulips.com/images/popup/fabio-fringed-tulips.jpg")
Flower.create(name: "Armeniacum", type_species: "Muscari", season: "Spring", subseason: "Early", color: "Blue", height: "6 to 9 inches", description: "Mimic grapes. Fragrant.", user_id: 1, image_url: "https://www.tulips.com/images/popup/Muscari-Armeniacum.jpg")
Flower.create(name: "Columbus", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Pinkish red with cream edge", height: "18 inches and up", description: "Double tulip", user_id: 1, image_url: "https://www.tulips.com/images/popup/columbus-double-tulip.jpg")
Flower.create(name: "Yellow crocus", type_species: "Crocus", season: "Spring", subseason: "Early", color: "Yellow", height: "4 to 6 inches", description: "Multiply very quickly", user_id: 2, image_url: "https://www.tulips.com/images/popup/Yellow-Crocus.jpg")
Flower.create(name: "Joan of Arc", type_species: "Crocus", season: "Spring", subseason: "Early", color: "White", height: "4 to 6 inches", description: "Multiply very quickly", user_id: 2, image_url: "https://www.tulips.com/images/popup/Joan-of-Arc.jpg")
puts "✅ Done seeding flowers!"

puts "Seeding locations ..."
Location.create(name: "Planter", description: "Maple rectangular planter")
Location.create(name: "Pot", description: "Round grey conoid pot")
Location.create(name: "Basket", description: "Basket with rose")
Location.create(name: "Ground", description: "Under bluberry, against the garage")
Location.create(name: "Flowerbed", description: "In the side yard")
Location.create(name: "Pot", description: "Yellow small pot")
Location.create(name: "Pot", description: "Clay strawberry pot with side openings")
Location.create(name: "Ground", description: "Between the bench and peach tree, by the fence")
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
