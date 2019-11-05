##############################
# Definitions
##############################

USER_APPS = puzzle maze bird turtle movie music pond/tutor pond/duck
ALL_JSON = ./ puzzle maze bird turtle movie music pond pond/tutor pond/duck
ALL_TEMPLATES = appengine/templates/template.soy,appengine/templates/puzzle/template.soy,appengine/templates/maze/template.soy,appengine/templates/bird/template.soy,appengine/templates/turtle/template.soy,appengine/templates/movie/template.soy,appengine/templates/music/template.soy,appengine/templates/pond/template.soy,appengine/templates/pond/tutor/template.soy,appengine/templates/pond/duck/template.soy,appengine/templates/gallery/template.soy

APP_ENGINE_THIRD_PARTY = appengine/third-party
SOY_COMPILER = java -jar third-party-downloads/SoyToJsSrcCompiler.jar --shouldProvideRequireSoyNamespaces --isUsingIjData
SOY_EXTRACTOR = java -jar third-party-downloads/SoyMsgExtractor.jar

REQUIRED_BINS = svn unzip wget java python sed

##############################
# Rules
##############################

all: deps languages

index puzzle maze bird turtle movie music gallery: common
	@echo "Generating JS from appengine/$@/template.soy"
	mkdir -p appengine/$@/generated;
	i18n/json_to_js.py --output_dir appengine/$@/generated --template appengine/$@/template.soy json/*.json;
	python build-app.py $@
	@echo

pond-docs: pond-common
	@echo "Generating JS from appengine/pond/docs/template.soy"
	mkdir -p appengine/pond/docs/generated;
	i18n/json_to_js.py --output_dir appengine/pond/docs/generated --template appengine/pond/docs/template.soy json/*.json;
	python build-app.py pond/docs
	@echo

pond-tutor: pond-common
	@echo "Generating JS from appengine/pond/tutor/template.soy"
	mkdir -p appengine/pond/tutor/generated;
	i18n/json_to_js.py --output_dir appengine/pond/tutor/generated --template appengine/pond/tutor/template.soy json/*.json;
	python build-app.py pond/tutor
	@echo

pond-duck: pond-common
	@echo "Generating JS from appengine/pond/duck/template.soy"
	mkdir -p appengine/pond/duck/generated;
	i18n/json_to_js.py --output_dir appengine/pond/duck/generated --template appengine/pond/duck/template.soy json/*.json;
	python build-app.py pond/duck
	@echo

pond-common: common
	@echo "Generating JS from appengine/pond/template.soy"
	mkdir -p appengine/pond/generated;
	i18n/json_to_js.py --output_dir appengine/pond/generated --template appengine/pond/template.soy json/*.json;
	@echo

common: soy-to-json
	@echo "Generating JS from appengine/template.soy"
	mkdir -p appengine/generated;
	i18n/json_to_js.py --output_dir appengine/generated --template appengine/template.soy json/*.json;
	@echo

createDir:
	@echo "Create dir";	
	@for app in $(USER_APPS); do \
		mkdir -p appengine/$$app; \
	done

copyTemplates:
	@echo "Copy templates";	
	mkdir -p appengine/templates; 
	@for app in $(USER_APPS); do \
		mkdir -p appengine/templates/$$app; \
		cp ../blockly-games/appengine/$$app/template.soy appengine/templates/$$app;\
	done
	sudo cp ../blockly-games/appengine/template.soy appengine/templates;\
	sudo cp ../blockly-games/appengine/pond/template.soy appengine/templates/pond/template.soy;\
	mkdir -p appengine/templates/gallery;\
	sudo cp ../blockly-games/appengine/gallery/template.soy appengine/templates/gallery/template.soy;\

copyModifiedTemplates:
	@echo "Copy modified templates";
	cp -R appengine/modifiedTemplates/* appengine/templates

copyModule:
	@echo "Copy module";
	sudo cp -R ../blockly-games/i18n ../blockly-games/third-party ../blockly-games/externs .
	sudo rm -rf appengine/third-party/
	sudo cp -R ../blockly-games/appengine/third-party appengine
	sudo cp appengine/common/boot.js .
	sudo cp -R ../blockly-games/appengine/common/ ../blockly-games/appengine/js appengine
	sudo mv boot.js appengine/common/boot.js
	cp -R ../blockly-games/appengine/pond/js/ appengine/pond
	@for app in $(USER_APPS); do \
		cp -R ../blockly-games/appengine/$$app/js/ appengine/$$app;\
	done

soy-to-json:
	@echo "Converting Soy files to JSON for Translatewiki."
	@# Create extracted_msgs.xlf with all messages from all soy files.
	$(SOY_EXTRACTOR) --outputFile extracted_msgs.xlf --srcs $(ALL_TEMPLATES)
	@# Creates json/en.json, json/qqq.json, json/keys.json.
	@# Deletes extracted_msgs.xlf
	i18n/xliff_to_json.py --xlf extracted_msgs.xlf --templates $(ALL_TEMPLATES)
	@echo

languages: createDir copyTemplates copyModule soy-to-json
	@for app in $(ALL_JSON); do \
	  echo "Generating JS from appengine/$$app/template.soy"; \
	  mkdir -p appengine/$$app/generated; \
	  i18n/json_to_js.py --output_dir appengine/$$app/generated --template appengine/templates/$$app/template.soy json/*.json; \
	  echo; \
	done
	@for app in $(USER_APPS); do \
	  python build-app.py $$app; \
	done

modifiedLanguages: createDir copyModifiedTemplates copyModule soy-to-json
	@for app in $(ALL_JSON); do \
	  echo "Generating JS from appengine/$$app/template.soy"; \
	  mkdir -p appengine/$$app/generated; \
	  i18n/json_to_js.py --output_dir appengine/$$app/generated --template appengine/templates/$$app/template.soy json/*.json; \
	  echo; \
	done
	@for app in $(USER_APPS); do \
	  python build-app.py $$app; \
	done

deps:	
	$(foreach bin,$(REQUIRED_BINS),\
	    $(if $(shell command -v $(bin) 2> /dev/null),$(info Found `$(bin)`),$(error Please install `$(bin)`)))
	mkdir -p third-party-downloads
	@# All following commands are in third-party-downloads, use backslashes to keep them on the same line as the cd command.
	cd third-party-downloads; \
	svn checkout https://github.com/google/closure-library/trunk/closure/bin/build build; \
	wget -N https://dl.google.com/closure-templates/closure-templates-for-javascript-latest.zip; \
	unzip -o closure-templates-for-javascript-latest.zip SoyToJsSrcCompiler.jar; \
	wget -N https://dl.google.com/closure-templates/closure-templates-msg-extractor-latest.zip; \
	unzip -o closure-templates-msg-extractor-latest.zip SoyMsgExtractor.jar; \
	wget -N https://dl.google.com/closure-compiler/compiler-latest.zip; \
	unzip -o compiler-latest.zip -x COPYING README.md; \
	mv -f closure-compiler-v*.jar closure-compiler.jar; \
	chmod +x build/closurebuilder.py

	mkdir -p $(APP_ENGINE_THIRD_PARTY)
	svn checkout --force https://github.com/ajaxorg/ace-builds/trunk/src-min-noconflict/ $(APP_ENGINE_THIRD_PARTY)/ace
	mkdir -p $(APP_ENGINE_THIRD_PARTY)/blockly
	svn checkout https://github.com/google/blockly/branches/develop/blocks $(APP_ENGINE_THIRD_PARTY)/blockly/blocks
	svn checkout https://github.com/google/blockly/branches/develop/core $(APP_ENGINE_THIRD_PARTY)/blockly/core
	svn checkout https://github.com/google/blockly/branches/develop/externs $(APP_ENGINE_THIRD_PARTY)/blockly/externs
	svn checkout https://github.com/google/blockly/branches/develop/generators $(APP_ENGINE_THIRD_PARTY)/blockly/generators
	svn checkout https://github.com/google/blockly/branches/develop/media $(APP_ENGINE_THIRD_PARTY)/blockly/media
	svn checkout https://github.com/google/blockly/branches/develop/msg $(APP_ENGINE_THIRD_PARTY)/blockly/msg
	svn checkout https://github.com/CreateJS/SoundJS/trunk/lib/ $(APP_ENGINE_THIRD_PARTY)/SoundJS
	cp third-party/base.js $(APP_ENGINE_THIRD_PARTY)/
	cp third-party/soyutils.js $(APP_ENGINE_THIRD_PARTY)/
	cp -R third-party/soundfonts $(APP_ENGINE_THIRD_PARTY)/

	@# Blockly's date field needs Closure.  But we don't use it.
	rm -r $(APP_ENGINE_THIRD_PARTY)/blockly/core/field_date.js

	svn checkout https://github.com/NeilFraser/JS-Interpreter/trunk/ $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter
	@# Remove @license tag so compiler will strip Google's license.
	sed 's/@license//' $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter/interpreter.js > $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter/interpreter_.js
	@# Compile JS-Interpreter using SIMPLE_OPTIMIZATIONS because the Music game needs to mess with the stack.
	java -jar third-party-downloads/closure-compiler.jar\
	 --language_out ECMASCRIPT5_STRICT\
	 --js $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter/acorn.js\
	 --js $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter/interpreter_.js\
	 --js_output_file $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter/compressed.js
	rm $(APP_ENGINE_THIRD_PARTY)/JS-Interpreter/interpreter_.js

clean: clean-languages clean-deps

clean-languages:
	rm -rf appengine/$(ALL_JSON)/generated
	rm -f json/keys.json

clean-deps:
	rm -rf $(APP_ENGINE_THIRD_PARTY)
	rm -rf third-party-downloads

# Prevent non-traditional rules from exiting with no changes.
.PHONY: deps
