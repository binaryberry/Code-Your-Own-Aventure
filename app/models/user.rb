require 'pry'

class User

	attr_accessor :name, :dress

	def initialize(name, dress_color="black")
		@name = name
		@dress = dress_color
	end

end