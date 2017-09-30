class AddDatesToCohort < ActiveRecord::Migration[5.1]
  def change
    add_column :cohorts, :open_date, :date
    add_column :cohorts, :close_date, :date
    add_column :cohorts, :notify_date, :date
  end
end
