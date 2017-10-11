class CreateCohorts < ActiveRecord::Migration[5.1]
  def change
    create_table :cohorts do |t|
      t.string :title, default: '1703'
      t.date :start_date, default: '01-01-2000'
      t.date :end_date, default: '01-01-2000'
      t.date :open_date, default: '01-01-2000'
      t.date :close_date, default: '01-01-2000'
      t.date :notify_date, default: '01-01-2000'
      t.integer :essay_limit
      t.string :guidelines
      t.string :questions
      t.boolean :open, default: false
      t.integer :state, default: 0

      t.timestamps null: false
    end
  end
end
