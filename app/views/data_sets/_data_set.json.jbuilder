json.extract! data_set, :id, :name, :production, :data_starts, :data_ends, :data_source_id, :created_at, :updated_at
json.url data_set_url(data_set, format: :json)
