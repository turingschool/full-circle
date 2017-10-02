class CreateCohorts < ActiveRecord::Migration[5.1]
  def change
    create_table :cohorts do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      t.date :open_date
      t.date :close_date
      t.date :notify_date
      t.integer :essay_limit
      t.string :guidelines
      t.string :questions
      t.boolean :open, defaults: false
      t.integer :state, default: 0

      t.timestamps null: false
    end
  end
end
