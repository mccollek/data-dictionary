require 'test_helper'

class DataArchetypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  #
  test 'add_default_color adds color_swatch if not set on creation' do
    @data_archetype = DataArchetype.create(name: 'test without color')
    assert_equal 'bcacd2', @data_archetype.color_swatch
  end
  test 'do not add_default_color if set on creation' do
    @data_archetype = DataArchetype.create(name: 'test without color', color_swatch: '666666')
    assert_equal '666666', @data_archetype.color_swatch
  end

  test 'add_default_color does not override color_swatch on update' do
    @data_archetype = DataArchetype.create(name: 'test without color', color_swatch: '666666')
    @data_archetype.update_attribute(:name, 'test update')
    assert_equal '666666', @data_archetype.color_swatch
  end


end
