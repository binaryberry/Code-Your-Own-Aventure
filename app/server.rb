require 'sinatra'
require 'sinatra/partial'

# require_relative 'models/user.rb'

class Fileww < Sinatra::Application

    set :public_folder, File.join(File.dirname(__FILE__), '..', 'public') 
    
    get '/' do
        erb :index
    end

end