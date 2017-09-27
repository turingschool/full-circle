class AddAltEmailAndNameToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :alt_email, :string
    add_column :users, :alt_name, :string
  end
end
