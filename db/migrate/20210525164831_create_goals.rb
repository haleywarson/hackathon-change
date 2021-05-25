class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :original_goal
      t.string :original_s
      t.string :original_sm
      t.string :original_sma 
      t.string :original_smar
      t.date :start_date
      t.date :end_date
      t.string :final_goal
      t.timestamps
    end
  end
end
