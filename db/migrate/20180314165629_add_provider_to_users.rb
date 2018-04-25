class AddProviderToUsers < ActiveRecord::Migration[5.1]
  def self.up
    add_column :users, :provider, :string

    execute("UPDATE users SET provider = 'github'")
    change_column :users, :provider, :string, null: false
    change_column :users, :uid, :string, null: false

    remove_index :users, :uid
    add_index :users, [:uid, :provider], unique: true
  end

  def self.down
    remove_index :users, [:uid, :provider]
    add_index :users, :uid, unique: true
    change_column :users, :uid, :string, null: true
    remove_column :users, :provider
  end
end
