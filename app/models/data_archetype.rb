class DataArchetype < ApplicationRecord
  has_many :data_set_archetypes, dependent: :destroy
  has_many :data_sets, through: :data_set_archetypes
  after_create_commit :add_default_color

# private
  def add_default_color
    Rails.logger.info('touched add_default_color for id #{id}')
    # byebug
    if color_swatch.nil?
      cp = ColorPicker.new(instance: (DataArchetype.all.count +1))
      update_attribute(:color_swatch, cp.color_swatch)
    end
  end
end
