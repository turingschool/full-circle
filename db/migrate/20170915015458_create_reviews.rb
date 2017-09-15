class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.json :metric
      t.integer :status
      t.references :application, foreign_key: true
      t.references :cohort_reviewer, foreign_key: true

      t.timestamps null: false
    end
  end
end
