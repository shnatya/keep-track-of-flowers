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
puts "✅ Done seeding flowers!"


puts "Seeding orders ..."
FlowerOrder.create(flower_id: 1, year: 2021)
puts "✅ Done seeding orders!"


puts "Seeding locations ..."
Location.create(name: "Planter", description: "Maple rectangular planter")
puts "✅ Done seeding locations!"


puts "Seeding planting operations ..."
PlantingOperation.create(flower_order_id: 1, location_id: 1, notes: "2022 - Bloomed all of ten bulbs. Beautiful, large flowers. In the beginning, tips of the flower is yellowish, with time turn into white.", gardener_id: 2, quantity: 10)
puts "✅ Done seeding planting operations!"
