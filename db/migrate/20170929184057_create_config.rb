class CreateConfig < ActiveRecord::Migration[5.1]
  def change
    create_table :configs do |t|
      t.string :questions
      t.integer :essay_limit
      t.text :guidelines
      t.references :cohort, foreign_key: true
    end
  end
end
