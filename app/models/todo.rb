class Todo
  include Mongoid::Document
  field :title, type: String
  field :description, type: String
  field :done, type: Mongoid::Boolean
end
