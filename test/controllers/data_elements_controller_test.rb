require 'test_helper'

class DataElementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @data_element = data_elements(:one)
  end

  test "should get index" do
    get data_elements_url
    assert_response :success
  end

  test "should get new" do
    get new_data_element_url
    assert_response :success
  end

  test "should create data_element" do
    assert_difference('DataElement.count') do
      post data_elements_url, params: { data_element: { data_set_id: @data_element.data_set_id, name: @data_element.name } }
    end

    assert_redirected_to data_element_url(DataElement.last)
  end

  test "should show data_element" do
    get data_element_url(@data_element)
    assert_response :success
  end

  test "should get edit" do
    get edit_data_element_url(@data_element)
    assert_response :success
  end

  test "should update data_element" do
    patch data_element_url(@data_element), params: { data_element: { data_set_id: @data_element.data_set_id, name: @data_element.name } }
    assert_redirected_to data_element_url(@data_element)
  end

  test "should destroy data_element" do
    assert_difference('DataElement.count', -1) do
      delete data_element_url(@data_element)
    end

    assert_redirected_to data_elements_url
  end
end
