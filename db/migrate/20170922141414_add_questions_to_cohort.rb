class AddQuestionsToCohort < ActiveRecord::Migration[5.1]
  def change
    add_column :cohorts, :config, :json
  end
end
