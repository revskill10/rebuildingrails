require "myrails/version"
require "myrails/routing"
require "myrails/util"
require "myrails/dependencies"

module Myrails
  class Application
  	def call(env)
  		# get controller and action
  		klass, act = get_controller_and_action(env)

  		# new controller
  		controller = klass.new(env)

  		# send action to controller
  		result = controller.send(act)

  		# return result
  		[200, {'Content-Type' => 'text/html'}, [result]]

  	end
  end

  class Controller
  	def initialize(env)
  		@env = env
  	end
  	def env
  		@env
  	end
  end
end
