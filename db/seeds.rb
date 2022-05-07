# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users ..."
User.create(username: "John", password: "testtest")
User.create(username: "Mary", password: "testtest")
puts "✅ Done seeding users!"


puts "Seeding flowers ..."
Flower.create(name: "Columbus", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Pinkish red with cream edge", height: "18 inches and up", description: "Double tulip", user_id: 1, image_url: "https://www.tulips.com/images/popup/columbus-double-tulip.jpg")
Flower.create(name: "Yellow", type_species: "Crocus", season: "Spring", subseason: "Early", color: "Yellow", height: "4 to 6 inches", description: "", user_id: 2, image_url: "https://www.tulips.com/images/popup/Yellow-Crocus.jpg")
Flower.create(name: "Fabio", type_species: "Tulips", season: "Spring", subseason: "Mid", color: "Red and yellow", height: "16 inches", description: "Fringed tulips", user_id: 1, image_url: "https://www.tulips.com/images/popup/fabio-fringed-tulips.jpg")
puts "✅ Done seeding flowers!"


puts "Seeding orders ..."
FlowerOrder.create(flower_id: 1, year: 2021)
FlowerOrder.create(flower_id: 2, year: 2021)
FlowerOrder.create(flower_id: 3, year: 2020)
puts "✅ Done seeding orders!"


puts "Seeding locations ..."
Location.create(name: "Planter", description: "Maple rectangular planter")
Location.create(name: "Pot", description: "Round conoid pot")
Location.create(name: "Basket", description: "Basket with rose")
Location.create(name: "Ground", description: "Under bluberry, against the garage")
Location.create(name: "Flowerbed", description: "In the side yard")
puts "✅ Done seeding locations!"


puts "Seeding planting operations ..."
PlantingOperation.create(flower_order_id: 1, location_id: 1, notes: "2022 - Bloomed all of ten bulbs. Beautiful, large flowers. In the beginning, tips of the flower is yellowish, with time turn into white.", gardener_id: 2, quantity: 10)
PlantingOperation.create(flower_order_id: 2, location_id: 2, notes: "2021 - Bloomed all of bulbs long enough.", gardener_id: 1, quantity: 6)
PlantingOperation.create(flower_order_id: 2, location_id: 3, notes: "2021 - Bloomed all of bulbs long enough.", gardener_id: 2, quantity: 4)
PlantingOperation.create(flower_order_id: 3, location_id: 4, notes: "2020 - Bloomed all of bulbs, but buds were damaged, maybe yet in the ground. 2021 - Bloomed without damage.", gardener_id: 1, quantity: 7)
PlantingOperation.create(flower_order_id: 3, location_id: 5, notes: "2020 - Bloomed without damage. 2021 - Bloomed all without damage.", gardener_id: 1, quantity: 3)
puts "✅ Done seeding planting operations!"
