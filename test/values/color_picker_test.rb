require 'test_helper'
class ColorPickerTest < ActiveSupport::TestCase

  # Called before every test method runs. Can be used
  # to set up fixture information.
  def setup
    # Do nothing
  end

  # Called after every test method runs. Can be used to tear
  # down fixture information.

  def teardown
    # Do nothing
  end

  # Fake test
  test 'Given default seed, first 3 colors always returned' do
    cp=ColorPicker.new(instance:1)
    assert_equal "acd2d2", cp.color_swatch
    cp=ColorPicker.new(instance:2)
    assert_equal "d2c7ac", cp.color_swatch
    cp=ColorPicker.new(instance:3)
    assert_equal "bcacd2", cp.color_swatch
  end
  test 'Given custom seed, first 3 colors always returned' do
    cp=ColorPicker.new(instance:1, seed: 2019)
    assert_equal "accdd2", cp.color_swatch
    cp=ColorPicker.new(instance:2, seed: 2019)
    assert_equal "d2ccac", cp.color_swatch
    cp=ColorPicker.new(instance:3, seed: 2019)
    assert_equal "c1acd2", cp.color_swatch
  end
end