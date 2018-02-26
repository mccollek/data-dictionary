require 'test_helper'

class DataArchetypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @data_archetype = data_archetypes(:one)
  end

  test "should get index" do
    get data_archetypes_url
    assert_response :success
  end

  test "should get new" do
    get new_data_archetype_url
    assert_response :success
  end

  test "should create data_archetype" do
    assert_difference('DataArchetype.count') do
      post data_archetypes_url, params: { data_archetype: { description: @data_archetype.description, name: @data_archetype.name } }
    end

    assert_redirected_to data_archetype_url(DataArchetype.last)
  end

  test "should show data_archetype" do
    get data_archetype_url(@data_archetype)
    assert_response :success
  end

  test "should get edit" do
    get edit_data_archetype_url(@data_archetype)
    assert_response :success
  end

  test "should update data_archetype" do
    patch data_archetype_url(@data_archetype), params: { data_archetype: { description: @data_archetype.description, name: @data_archetype.name } }
    assert_redirected_to data_archetype_url(@data_archetype)
  end

  test "should destroy data_archetype" do
    assert_difference('DataArchetype.count', -1) do
      delete data_archetype_url(@data_archetype)
    end

    assert_redirected_to data_archetypes_url
  end
end
