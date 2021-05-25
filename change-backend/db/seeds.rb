# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Goal.destroy_all

Goal.create!(
    original_goal: "I want to feel better.",
    original_s: "I want to feel happy.",
    original_sm: "I want to feel like the best version of myself.",
    original_sma: "I want to spend time doing the things that I love.",
    original_smar: "I will set aside 1 hour each day to do something I love.",
    start_date: "07-01-2008",
    end_date: "07-03-2008",
    final_goal: "Beginning on May 30th, I will meditate from 8-9am every Mon-Fri until June 30th."
)

Goal.create!(
    original_goal: "I want to feel refreshed.",
    original_s: "I want to be healthy.",
    original_sm: "I want to eat healthy foods and work out.",
    original_sma: "I will set aside time during lunch break to cook and work out.",
    original_smar: "I will spend 30 minutes at lunch cooking healthy foods and working out.",
    start_date: "07-03-2008",
    end_date: "07-03-2009",
    final_goal: "Beginning on May 30th and until June 30th, I will spend 30 minutes at lunch cooking healthy foods and doing pilates."
)
