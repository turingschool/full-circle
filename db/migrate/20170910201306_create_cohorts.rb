class CreateCohorts < ActiveRecord::Migration[5.1]
  def change
    create_table :cohorts do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      t.integer :essay_limit
      t.string :guidelines
      t.string :questions
      t.integer :state, default: 0

      t.timestamps null: false
    end
  end
end
