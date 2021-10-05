# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning up data..."
User.destroy_all
Card.destroy_all

puts "Seeding data..."

jeff = User.create!(username: "jthomassen")
sungoh = User.create!(username: "spark")

Card.create!([
    {
        title: "Note",
        content: "a note is a symbol denoting a musical sound",
        subject: "Music Theory",
        studied: false,
        mastered: false,
        user_id: jeff.id
    },
    {
        title: "Chord",
        content: "a chord is a collection of notes performed simultaneously", subject: "Music Theory",
        studied: false,
        mastered: false,
        user_id: jeff.id
    },
    {
        title: "Scale",
        content: "a scale is a collection of notes played either in a descending or ascending fashion",
        subject: "Music Theory",
        studied: false,
        mastered: false,
        user_id: sungoh.id
    },
    {
        title: "Beat",
        content: "a beat is a single unit of a percussive rhythm",
        subject: "Music Theory",
        studied: false,
        mastered: false,
        user_id: sungoh.id
    },
    {
        title: "Rhythm",
        content: "a rhythm is a collection of beats performed in a pattern",
        subject: "Music Theory",
        studied: false,
        mastered: false,
        user_id: sungoh.id
    }
])

puts "Seeding complete!"