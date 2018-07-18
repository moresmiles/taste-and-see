# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email:"testuser@test.com", password:"testuser", password_confirmation:"testuser")
Beer.create(name:"Heady Topper", style:"Double IPA", rating: 5, notes:"...", user_id: 1 )
Beer.create(name:"Sip of Sunshine", style:"IPA", rating: 5, notes:"...", user_id: 1 )
Beer.create(name:"Bhindi", style:"IPA", rating: 4, notes:"...", user_id: 1 )
Beer.create(name:"Boston Lager", style:"Lager", rating: 3, notes:"...", user_id: 1 )
