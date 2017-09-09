class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :github_id
      t.text :github_token
      t.integer :role, default: 0

      t.timestamps null: false
    end
  end
end
