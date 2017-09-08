class CreateUsersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :users_tables do |t|
      t.string :first_name
      t.string :last_name
      t.string :github_id
      t.text :github_token
      t.integer :role, default: 0

      t.timestamps null: false
    end
  end
end
