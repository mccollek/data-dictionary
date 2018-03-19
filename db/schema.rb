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

ActiveRecord::Schema.define(version: 20180319154952) do

  create_table "data_archetypes", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "color_swatch"
  end

  create_table "data_elements", force: :cascade do |t|
    t.string "name"
    t.integer "data_set_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["data_set_id"], name: "index_data_elements_on_data_set_id"
  end

  create_table "data_set_archetypes", force: :cascade do |t|
    t.integer "data_set_id"
    t.integer "data_archetype_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["data_archetype_id"], name: "index_data_set_archetypes_on_data_archetype_id"
    t.index ["data_set_id"], name: "index_data_set_archetypes_on_data_set_id"
  end

  create_table "data_sets", force: :cascade do |t|
    t.string "name"
    t.boolean "production"
    t.date "data_starts"
    t.date "data_ends"
    t.integer "data_source_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["data_source_id"], name: "index_data_sets_on_data_source_id"
  end

  create_table "data_sources", force: :cascade do |t|
    t.string "name"
    t.boolean "production"
    t.string "refresh_frequency"
    t.string "reliability"
    t.text "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.text "notes"
  end

end
