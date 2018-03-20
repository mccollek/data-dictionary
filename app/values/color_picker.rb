class ColorPicker
  DEFAULT_SEED=2018
  attr_reader :instance
  def initialize(instance:, seed: DEFAULT_SEED)
    @instance = instance
    @seed = seed
  end

  def color_swatch
    @hex =''
    generator = ColorGenerator.new saturation: 0.3, lightness: 0.5, seed: @seed
    @instance.times do @hex=generator.create_hex end
    return @hex
  end
end