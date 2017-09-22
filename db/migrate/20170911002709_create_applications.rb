class CreateApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :applications do |t|
      t.text :essay, default: ""
      t.integer :status, default: 0
      t.integer :state, default: 0
      t.references :cohort, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps null: false
    end
  end
end
