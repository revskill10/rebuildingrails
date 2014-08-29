# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'myrails/version'

Gem::Specification.new do |spec|
  spec.name          = "myrails"
  spec.version       = Myrails::VERSION
  spec.authors       = ["h_dung"]
  spec.email         = ["hoangdung1987@gmail.com"]
  spec.summary       = %q{My custom Rails.}
  spec.description   = %q{A rack-based framework.}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
  spec.add_runtime_dependency "rack"
  spec.add_runtime_dependency "erubis"
end
