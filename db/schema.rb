# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170929184057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.text "essay", default: ""
    t.integer "status", default: 0
    t.integer "state", default: 0
    t.bigint "cohort_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cohort_id"], name: "index_applications_on_cohort_id"
    t.index ["user_id"], name: "index_applications_on_user_id"
  end

  create_table "cohort_reviewers", force: :cascade do |t|
    t.integer "status", default: 0
    t.bigint "cohort_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cohort_id"], name: "index_cohort_reviewers_on_cohort_id"
    t.index ["user_id"], name: "index_cohort_reviewers_on_user_id"
  end

  create_table "cohorts", force: :cascade do |t|
    t.string "title"
    t.date "start_date"
    t.date "end_date"
    t.integer "state", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "configs", force: :cascade do |t|
    t.string "questions"
    t.integer "essay_limit"
    t.text "guidelines"
    t.bigint "cohort_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cohort_id"], name: "index_configs_on_cohort_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.json "score_card"
    t.integer "status", default: 0
    t.bigint "application_id"
    t.bigint "cohort_reviewer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["application_id"], name: "index_reviews_on_application_id"
    t.index ["cohort_reviewer_id"], name: "index_reviews_on_cohort_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "uid"
    t.text "token"
    t.integer "role", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "alt_email"
    t.string "alt_name"
    t.index ["uid"], name: "index_users_on_uid", unique: true
  end

  add_foreign_key "applications", "cohorts"
  add_foreign_key "applications", "users"
  add_foreign_key "cohort_reviewers", "cohorts"
  add_foreign_key "cohort_reviewers", "users"
  add_foreign_key "configs", "cohorts"
  add_foreign_key "reviews", "applications"
  add_foreign_key "reviews", "cohort_reviewers"
end
