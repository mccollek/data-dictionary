json.extract! data_source, :id, :name, :production, :refresh_frequency, :reliability, :location, :created_at, :updated_at
json.url data_source_url(data_source, format: :json)
json.data_sets data_source.data_sets do |data_set|
  json.(data_set, :id, :name, :data_starts, :data_ends, :production)
  json.data_archetypes data_set.data_archetypes do |data_archetype|
    json.(data_archetype, :id)
  end
end
