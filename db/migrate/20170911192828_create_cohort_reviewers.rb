class CreateCohortReviewers < ActiveRecord::Migration[5.1]
  def change
    create_table :cohort_reviewers do |t|
      t.integer :status, default: 0
      t.references :cohort, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps null: false
    end
  end
end
